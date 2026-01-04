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
                style="width: auto"
                v-model:value="vehicleNumber"
                placeholder="请输入车号" />
            </a-form-item>

            <!-- 输入车型 -->
            <a-form-item label="输入车型" required>
              <a-input
                class="my-input"
                style="width: auto"
                v-model:value="vehicleType"
                placeholder="请输入车型" />
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
        <a-button class="my-button-custom" @click="confirmUpload">
          确认上传
        </a-button>
      </div>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import tuzhi from '@/assets/images/tuzhi.png';

interface Props {
  visible: boolean;
}

const props = defineProps<Props>();
const emits = defineEmits(['colse']);
const vehicleNumber = ref('');
const vehicleType = ref('');
const previewImage = ref(tuzhi); // 图纸预览图片路径

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
      // 验证文件大小 (例如限制为5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB
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

      console.log('选择的文件:', file);
      // 在这里可以执行上传逻辑
      // uploadFile(file)
    }
  };
  // 触发文件选择对话框
  input.click();
};

const confirmUpload = () => {
  // 执行上传逻辑
  console.log('确认上传');
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
