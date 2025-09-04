<template>
  <div class="menu-container">
    <div class="menu" v-for="(item, index) in menus" :key="index">
      <template v-for="(subItem, subIndex) in item">
        <div class="item" :class="[
          index === 0 ? 'left' : 'right',
          subItem.path === $route.path ? 'active' : '',
        ]" @click="router.push(subItem.path)">
          <div class="title">{{ subItem.meta.title }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { getArrGroup } from "@/utils";

/**
 * 获取菜单
 * @return {*}
 */
const menus = ref<any>([]);
const router = useRouter();
watch(
  () => router,
  (value) => {
    const routes = value.currentRoute.value?.matched[0]?.children || [];
    menus.value = getArrGroup(routes, 3);
  },
  {
    immediate: true,
  }
);
</script>

<style scoped lang="less">
.menu-container {
  padding-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 650px;
  width: 100%;
  box-sizing: border-box;
  user-select: none;
  z-index: 999;

  .menu {
    display: flex;

    .item {
      position: relative;
      width: 208px;
      height: 46px;
      // background: url(@/assets/images/bg_nav.png) no-repeat center /cover;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      // padding-bottom: 20px;
      top: -18px;
      transition: all 0.3s;
      cursor: pointer;
      user-select: none;
      color: #fff;

      &.left {
        background-image: url("@/assets/images/main/menu_left_default.png");

        &:hover {
          background-image: url("@/assets/images/main/menu_left_click.png");
        }

        &.active {
          color: #ffffff;
          background-image: url("@/assets/images/main/menu_left_click.png");
          opacity: 1;
        }
      }

      &.right {
        background-image: url("@/assets/images/main/menu_right_default.png");

        &:hover {
          background-image: url("@/assets/images/main/menu_right_click.png");
        }

        &.active {
          color: #ffffff;
          background-image: url("@/assets/images/main/menu_right_click.png");
          opacity: 1;
        }
      }

      .title {
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
}
</style>
