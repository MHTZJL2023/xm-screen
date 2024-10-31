<template>
  <div class="search-container">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="less">
.search-container {
  box-sizing: border-box;
  padding: 16px;
  margin-bottom: 10px;
  border-radius: 5px;
  &.dark{
    background-color: @dark-bg-color;
  }
  &.light{
    background-color: @light-bg-color;
  }
  :deep(.ant-form) {
    margin-bottom: -24px;
  }
}
</style>
