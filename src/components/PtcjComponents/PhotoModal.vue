<template>
  <a-modal
    class="my-modal"
    title="图纸管理"
    :footer="null"
    v-model:open="props.visible"
    @cancel="emits('colse')"
    width="1200px"
    centered>
    <div>
      <div style="display: flex">
        <div style="width: 42%; margin-right: 20px; margin-top: 50px">
          <a-form>
            <!-- 输入车号 -->
            <a-form-item label="输入车号" required>
              <a-input
                class="my-input"
                style="width: 100%"
                v-model:value="vehicleNumber"
                placeholder="请输入车号" />
            </a-form-item>

            <!-- 输入车型 -->
            <a-form-item label="输入车型" required>
              <a-select
                class="my-select"
                style="width: 100%"
                v-model:value="vehicleType"
                :options="[
                  {
                    value: 1,
                    label: '公交车',
                  },
                  {
                    value: 2,
                    label: '商旅车',
                  },
                ]"
                placeholder="请选择车型" />
            </a-form-item>
          </a-form>
        </div>

        <!-- 图纸预览区域 -->
        <div class="preview-container">
          <div class="header">图纸预览</div>
          <img :src="previewImage" alt="图纸预览" />
        </div>
      </div>

      <!-- 操作按钮 -->
      <div class="button-group">
        <a-button class="my-button-custom" @click="selectLocalFile">
          选择本地图纸
        </a-button>
        <a-button class="my-button-custom" @click="uploadFile">
          确认上传
        </a-button>
      </div>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue';
import { ref } from 'vue';
import tuzhi from '@/assets/images/tuzhi.png';
import { carDesignImageUpload } from '@/service/v1';

interface Props {
  visible: boolean;
}

const props = defineProps<Props>();
const emits = defineEmits(['colse']);
const vehicleNumber = ref('');
const vehicleType = ref<number | undefined>();
const previewImage = ref(tuzhi); // 图纸预览图片路径
const fileRef = ref<File | null>(null);

const uploadFile = async () => {
  console.log('上传文件', fileRef.value);

  // 检查是否选择了文件
  if (!fileRef.value) {
    message.error('请先选择要上传的图片');
    return;
  }

  // 验证文件大小
  const maxSize = 5 * 1024 * 1024; // 5MB in bytes
  if (fileRef.value.size > maxSize) {
    message.error('文件大小不能超过5MB');
    return;
  }

  // 验证必填字段
  if (!vehicleNumber.value || !vehicleType.value) {
    message.error('请输入车号和选择车型');
    return;
  }

  try {
    const designImageTypeName = vehicleType.value === 1 ? '公交车' : '商旅车';

    await carDesignImageUpload({
      file: fileRef.value,
      clbh: vehicleNumber.value,
      designImageTypeCode: vehicleType.value.toString(),
      designImageTypeName: designImageTypeName,
    });

    message.success('上传成功');

    // 重置表单
    vehicleNumber.value = '';
    vehicleType.value = undefined;
    previewImage.value = tuzhi; // 重置为默认图片
    fileRef.value = null;
  } catch (err) {
    message.error('上传失败');
    console.error('Upload error:', err);
  }
};

// 方法定义
const selectLocalFile = () => {
  // 创建一个隐藏的文件输入元素
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*'; // 只接受图片文件
  input.onchange = event => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file) {
      // 验证文件大小 (限制为5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        message.error('文件大小不能超过5MB');
        return;
      }

      // 验证文件类型
      const allowedTypes = [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/bmp',
        'image/webp',
      ];
      if (!allowedTypes.includes(file.type)) {
        message.error('只支持上传图片文件(jpg, png, gif, bmp, webp)');
        return;
      }

      // 保存文件引用用于后续上传
      fileRef.value = file;

      // 更新预览图片
      const reader = new FileReader();
      reader.onload = e => {
        previewImage.value = e.target?.result as string;
      };
      reader.readAsDataURL(file);

      console.log('选择的文件:', file);
    }
  };

  // 触发文件选择对话框
  input.click();
};
</script>

<style scoped lang="less">
.preview-container {
  margin-top: 20px;
  text-align: center;
  .header {
    margin-bottom: 10px;
    font-weight: bold;
  }
}

.preview-container img {
  max-width: 100%;
  height: auto;
}

.button-group {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 10px;
}
</style>
