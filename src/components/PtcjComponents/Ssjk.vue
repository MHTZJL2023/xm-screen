<template>
  <BaseCard title="实时监控" :title-type="true" class="container">
    <div class="card">
      <div style="display: flex">
        <div class="list">
          <div
            class="listItem"
            v-for="item in list"
            :key="item.areaId"
            :style="{ color: selected == item.areaId ? '#59c18e' : '#fff' }"
            @click="onSelected(item.areaId)">
            {{ item.areaName }}
          </div>
        </div>
        <div class="video">
          <!-- <img src="@/assets/images/ptcj/spjk.png" alt="" style="width: 100%;"> -->
          <!-- <BaseFlvVideo :area-id="selected" :video-service="getRtspUrl" /> -->
        </div>
      </div>
    </div>
  </BaseCard>
</template>
<script setup lang="ts">
import BaseCard from '@/components/BaseCard/index.vue';
import BaseFlvVideo from '@/components/BaseFlvVideo/src/BaseFlvVideo.vue';

import { onMounted, ref } from 'vue';
import { getAreaList, getRtspUrl } from '@/service/person';

const selected = ref('');
const list = ref([
  {
    gw: '工位1',
    areaName: '监控1',
    areaId: '1',
  },
  {
    gw: '工位1',
    areaName: '监控2',
    areaId: '2',
  },
]);

const getData = async () => {
  try {
    const res = await getAreaList();

    // const res = [
    //   {
    //     areaId: 44,
    //     areaName: "报警222",
    //     xy: [
    //       {
    //         x: 8.737717,
    //         y: 18.659897
    //       },
    //       {
    //         x: 25,
    //         y: 18.659897
    //       },
    //       {
    //         x: 25,
    //         y: 24.371315
    //       },
    //       {
    //         x: 8.737717,
    //         y: 24.371315
    //       },
    //       {
    //         x: 8.737717,
    //         y: 18.659897
    //       }
    //     ]
    //   }
    // ]

    list.value = res.map(item => {
      return {
        areaName: item.areaName,
        areaId: item.areaId,
      };
    });

    if (res?.length > 0) selected.value = res[0].areaId;
  } catch (err) {
    console.log(err);
  }
};

const onSelected = async (id: string) => {
  selected.value = id;

  // const res = await getRtspUrl({
  //   areaId: id,
  //   startTime: dayjs().subtract(1, 'hours').format("YYYY-MM-DD HH:mm:ss"),
  //   endTime: dayjs().format("YYYY-MM-DD HH:mm:ss")
  // })
};
onMounted(() => {
  // getData();
});
</script>
<style lang="less" scoped>
.container {
  position: absolute;
  left: 20px;
  top: 740px;
  width: 420px;
  height: 300px;
}

.card {
  // display: flex;
  position: absolute;
}

.list {
  width: 30%;
  height: calc(400px - 63px);
  overflow-y: scroll;
  margin-top: 10px;
}

.listItem {
  width: 80px;
  text-align: center;
  height: auto;
  padding: 1px 20px;
  line-height: 24px;
  font-size: 16px;
  background-color: rgba(75, 162, 132, 0.3); // 偶数行浅色背景
  margin: 5px 0;
  cursor: pointer;

  &:active {
    color: #59c18e;
  }
}

.video {
  margin-top: 10px;
  width: 300px;
  height: 225px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
