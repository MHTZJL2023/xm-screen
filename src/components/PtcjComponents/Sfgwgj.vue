<template>
  <BaseCard title="示范工位告警" :title-type="true" class="card">
    <div class="list">
      <div class="listItem" v-for="item in list" :key="item">
        <div>
          <div>
            <span>姓名：{{ item.personName || '-' }}</span>
            <span style="margin-left: 20px">
              离开时间：{{ item.endtime || '-' }}
            </span>
          </div>
          <div>
            <span>告警时间：{{ item.starttime || '-' }}</span>
            <span style="margin-left: 20px">
              关联车辆：{{ item.cardId || '-' }}
            </span>
          </div>
        </div>
        <a-button
          class="my-button-custom"
          style="margin-left: auto"
          @click="onView">
          查看
        </a-button>
        <a-button class="my-button-custom" style="margin-left: 10px">
          确认
        </a-button>
      </div>
    </div>
  </BaseCard>

  <a-modal
    class="my-modal"
    title="告警详情"
    :footer="null"
    v-model:visible="visible"
    width="60vw"
    centered>
    <img src="@/assets/images/ptcj/gjxq.png" alt="" style="width: 100%" />
  </a-modal>
</template>
<script setup lang="ts">
import BaseCard from '@/components/BaseCard/index.vue';

import { onMounted, ref } from 'vue';

import { getCardAlarmForToday } from '../../service/person';

const visible = ref(false);

const onView = () => {
  visible.value = true;
};
const list = ref([
  {
    cardId: 10001,
    describe: '进入工位至离开工位时长超过5分钟',
    endtime: '2025-06-04 15:09:45',
    personName: '焦尧22',
    starttime: '2025-06-04 14:30:40',
  },
]);

const getData = async () => {
  try {
    const res = await getCardAlarmForToday();
    // const res = [
    //   {
    //     cardId: 10001,
    //     describe: '进入工位至离开工位时长超过5分钟',
    //     endtime: '2025-06-04 15:09:45',
    //     personName: '焦尧22',
    //     starttime: '2025-06-04 14:30:40',
    //   },
    // ];
    list.value = res;
  } catch (error) {
    console.log(error);
  }
};
onMounted(() => {
  getData();
});
</script>
<style lang="less" scoped>
.card {
  position: absolute;
  right: 20px;
  top: 160px;
  width: 520px;
  height: 400px;
}

.list {
  height: calc(400px - 63px);
  overflow-y: scroll;
  margin-top: 10px;
}

.listItem {
  display: flex;
  align-items: center;
  height: auto;
  padding: 2px 20px;
  line-height: 38px;
  font-size: 14px;
  background-color: rgba(75, 162, 132, 0.3); // 偶数行浅色背景
  margin: 5px 0;
}
</style>
