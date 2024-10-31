<template>
  <div class="date-container">
    <div class="time">{{ data.time }}</div>
    <a-space class="date-week">
      <div class="date">{{ data.date }}</div>
      <div class="week">{{ data.week }}</div>
    </a-space>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';
import { reactive } from 'vue';

const data = reactive({
  date: '',
  time: '',
  week: ''
})
const getData = () => {
  data.date = dayjs().format('YYYY/MM/DD')
  data.time = dayjs().format('HH:mm:ss')
  data.week = dayjs().format('dddd')
}
getData()
setInterval(() => {
  getData()
}, 1000)
</script>

<style scoped lang="less">
.date-container {
  padding-right: 8px;
  z-index: 999;

  .time {
    height: 21px;
    font-weight: bold;
    font-size: 26px;
    color: #D8ECFF;
    line-height: 15px;
    opacity: 0.6;
  }

  .date-week {
    height: 14px;
    font-weight: 400;
    font-size: 16px;
    color: #D8ECFF;
    line-height: 20px;
    opacity: 0.6;
  }
}
</style>
