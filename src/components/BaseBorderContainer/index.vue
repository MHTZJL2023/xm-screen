<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div class="item-bg-container" :class="props.class">
    <div class="header-angle"></div>
    <div class="footer-angle"></div>
    <slot></slot>
  </div>
</template>

<style scoped lang="less">
.item-bg-container {
  position: relative;
  box-sizing: border-box;
  border-style: solid;
  border-width: 1px;
  // border-image-source: linear-gradient(0deg, #044893 0%, #008cdd 51%, #044893 100%);
  border-color: #1B5C84;
  border-image-slice: 1;

  .points {
    position: absolute;
    top: 4px;
    right: 4px;
    z-index: 2;

    .p-item {
      width: 5px;
      height: 3px;
      background-color: #15f8cc;
    }
  }

  .item {
    position: relative;
    font-size: 13px;
    line-height: 20px;

    .label {
      color: #fff;
    }

    .tip {
      .icon {
        width: 8px;
        height: 8px;
        border: solid 1px #d0ffd080;
        border-radius: 10px;
      }

      &.tip-success {
        .status {
          color: #00ec02;
        }

        .icon {
          background-color: #00ec02;
        }
      }

      &.tip-error {
        .status {
          color: #ff2400;
        }

        .icon {
          background-color: #ff2400;
        }
      }
    }
  }

  .header-angle {
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 6px;
      height: 5px;
      content: '';
      border-top: 1px solid #01b2e9;
      border-left: 1px solid #01b2e9;
    }

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      width: 6px;
      height: 5px;
      content: '';
      border-top: 1px solid #01b2e9;
      border-right: 1px solid #01b2e9;
    }
  }

  .footer-angle {
    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 6px;
      height: 5px;
      content: '';
      border-bottom: 1px solid #01b2e9;
      border-left: 1px solid #01b2e9;
    }

    &::after {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 6px;
      height: 5px;
      content: '';
      border-right: 1px solid #01b2e9;
      border-bottom: 1px solid #01b2e9;
    }
  }
}
</style>
