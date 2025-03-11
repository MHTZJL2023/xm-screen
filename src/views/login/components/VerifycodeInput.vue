<template>
  <div>
    <a-input-group compact size="large">
      <a-input
        v-model:value="code"
        size="large"
        style="width: calc(100% - 100px)"
        @change="onChange">
        <template #prefix>
          <SafetyOutlined class="site-form-item-icon" />
        </template>
      </a-input>
      <a-button
        :loading="isLoading"
        type="default"
        class="code-container"
        @click="getImageSrc">
        <a-image
          v-if="imageSrc"
          :src="imageSrc"
          :preview="false"
          width="100%"
          height="100%" />
      </a-button>
    </a-input-group>
  </div>
</template>

<script lang="ts" setup>
import { SafetyOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { onMounted, ref } from 'vue';

/**
 * 获取验证码
 * @return {*}
 */
const imageSrc = ref<string>('');
const key = ref<string>(''); // 请求头用到的key
const isLoading = ref<boolean>(false);
const code = ref<any>('');
const getImageSrc = async () => {
  try {
    isLoading.value = true;
    imageSrc.value = '';
    code.value = '';

    // const res = await getCaptcha()
    const res: any = {};
    imageSrc.value = res.image;
    key.value = res.key;
  } catch (error) {
    console.log(error);
    message.error('获取验证码失败, 点击刷新重新请求');
  } finally {
    isLoading.value = false;
  }
};
onMounted(() => {
  getImageSrc();
});

/**
 * 绑定值
 * @return {*}
 */
const emit = defineEmits(['update:value']);
const onChange = (e: any) => {
  emit('update:value', {
    'captcha-code': e.target.value,
    'captcha-key': key.value,
  });
};
</script>

<style scoped lang="less">
.code-container {
  padding: 2px;
  box-sizing: border-box;
  width: 100px;
  overflow: hidden;
}

.image-container {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
