<!--
 * @Author: chenr 526963089@qq.com
 * @Date: 2023-02-09 15:16:50
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2023-02-09 15:39:04
 * @Description: 缓存页面使用
-->
<template>
  <template v-if="inKeep">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </template>
  <template v-else>
    <router-view />
  </template>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const inKeep = computed(() => router.currentRoute.value.meta?.keepAlive);
</script>
<style scoped lang="less"></style>
