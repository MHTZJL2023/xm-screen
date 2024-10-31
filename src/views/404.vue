<template>
  <a-result style="margin-top: 12vh" status="404" title="404" sub-title="很抱歉，您访问的页面不存在。">
    <template #extra>
      <a-button type="primary" @click="toHome"> 返回首页 </a-button>
    </template>
  </a-result>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();

const toHome = () => {
  console.log('router', router.getRoutes());

  router.push({ path: '/login', replace: true });
};
</script>
