<template>
  <div class="menu-container">
    <div class="menu" v-for="(item, index) in menus" :key="index">
      <template v-for="(subItem, subIndex) in item" :key="subIndex">
        <div
          class="item"
          :class="[
            index === 0 ? 'left' : 'right',
            subItem.path === $route.path ? 'active' : '',
          ]"
          @click="router.push(subItem.path)"
        >
          <div class="title">{{ subItem.meta.title }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
///subItem.path === $route.path
import { getArrGroup } from '@/utils';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

/**
 * 获取菜单
 * @return {*}
 */
const menus = ref<any>([]);
const router = useRouter();
watch(
  () => router,
  value => {
    const routes = value.currentRoute.value?.matched[1]?.children || [];
    menus.value = getArrGroup(routes, 2);
  },
  {
    immediate: true,
  },
);
</script>

<style scoped lang="less">
.menu-container {
  padding-top: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 580px;
  box-sizing: border-box;
  user-select: none;
  z-index: 999;

  .menu {
    display: flex;
    gap: 0;

    .item {
      position: relative;
      width: 236px;
      height: 60px;
      // background: url(@/assets/images/bg_nav.png) no-repeat center /cover;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding-bottom: 20px;
      transition: all 0.3s;
      opacity: 0.75;
      cursor: pointer;
      user-select: none;
      color: #fff;

      &.left {
        background-image: url('@/assets/images/bg_left_nav.png');

        &:hover {
          background-image: url('@/assets/images/bg_left_nav_hover.png');
        }

        &.active {
          color: #0fdae2;
          background-image: url('@/assets/images/bg_left_nav_hover.png');
          opacity: 1;
        }
      }

      &.right {
        background-image: url('@/assets/images/bg_right_nav.png');

        &:hover {
          background-image: url('@/assets/images/bg_right_nav_hover.png');
        }

        &.active {
          color: #0fdae2;
          background-image: url('@/assets/images/bg_right_nav_hover.png');
          opacity: 1;
        }
      }

      .title {
        font-weight: 400;
        font-size: 22px;
        line-height: 24px;
      }
    }
  }
}
</style>
