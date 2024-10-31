<template>
  <a-result
    style="margin-top: 12vh"
    status="403"
    title="403"
    sub-title="很抱歉，您没有访问此页面的权限。"
  >
    <template #extra>
      <a-button type="primary" @click="toHome"> 返回首页 </a-button>
    </template>
  </a-result>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const toHome = () => {
  router.push({ path: '/', replace: true });
};
</script>
