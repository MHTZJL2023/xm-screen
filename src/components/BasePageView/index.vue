<template>
  <a-drawer
    v-model:open="isOpen"
    :closable="false"
    :mask="false"
    :get-container="false"
    :style="{ position: 'absolute' }"
    :width="props.leftWidth ? props.leftWidth : '450px'"
    root-class-name="page-left-container"
    placement="left"
  >
    <div class="page-left-content">
      <slot name="left"></slot>
      <div class="extra">
        <slot name="left-extra"></slot>
      </div>
    </div>
  </a-drawer>
  <div class="map">
    <slot name="map"></slot>
  </div>

  <a-drawer
    v-model:open="isOpen"
    :closable="false"
    :mask="false"
    :get-container="false"
    :style="{ position: 'absolute' }"
    :width="props.rightWidth ? props.rightWidth : '450px'"
    root-class-name="page-right-container"
    placement="right"
  >
    <div class="page-right-content">
      <slot name="right"></slot>
      <div class="extra">
        <slot name="right-extra"></slot>
      </div>
    </div>
  </a-drawer>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface props {
  leftWidth?: string;
  rightWidth?: string;
}

const props = defineProps<props>();

const isOpen = ref<boolean>(true);
</script>

<style scoped lang="less">
.map {
  pointer-events: auto;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.page-left-content,
.page-right-content {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  z-index: 999;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  .extra {
    top: 0;
    position: absolute;
    height: 100%;
  }
}
.page-left-content {
  background-size: 100% 100%;
  .extra {
    left: calc(100% + 16px);
  }
}
.page-right-content {
  // background-image: url('@/assets/images/bg_left.png');
  background-size: 100% 100%;
  .extra {
    right: calc(100% + 16px);
  }
}
</style>
