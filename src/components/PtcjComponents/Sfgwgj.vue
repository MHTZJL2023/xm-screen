<template>
  <BaseCard title="示范工位告警" :title-type="true" class="card">
    <div class="list">
      <div class="listItem" v-for="item in list" :key="item">
        <div>
          <div>
            <span>
              姓名：{{
                item.personInfo ? item.personInfo[0]?.ryName || '-' : '-'
              }}
            </span>
            <span style="margin-left: 20px">
              离开时间：{{ item.fdLastModifiedTime || '-' }}
            </span>
          </div>
          <div>
            <span>告警时间：{{ item.docCreateTime || '-' }}</span>
            <span style="margin-left: 20px">
              关联车辆：{{ item.clch || '-' }}
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

import { getWarnInfoByClch } from '../../service/ekp';

const visible = ref(false);

const onView = () => {
  visible.value = true;
};
const list = ref([
  {
    abnormalType: '物料短缺问题',
    clch: 'R5U00679',
    docCreateTime: '2025-03-06 14:30:06',
    docStatus: '待审',
    docSubject: '厦门  前档玻璃  问题',
    fdEmergencyLevel: '紧急',
    fdFactory: '6100',
    fdLastModifiedTime: '2024-12-25 14:32:00',
    fdNumber: 'HZ202412250009',
    fdProblemDesc: '前档玻璃 缺料，请落实具体到货时间',
    fdTechRequire: '前档玻璃  问题',
    personInfo: [
      {
        ryName: '卢扬',
        ryId: '2768',
        rygh: '1000795',
        ryDepart: '\\金龙客车\\其他体系\\离职人员\\黑名单',
      },
    ],
    stationName: '乘客门工位',
    stationNo: 'D401',
    submitDepart: '总装公交产线',
  },
]);

const getData = async () => {
  try {
    const res = await getWarnInfoByClch({ clch: 'R5U00679' });
    // const res = [
    //   {
    //     abnormalType: '物料短缺问题',
    //     clch: 'R5U00679',
    //     docCreateTime: '2025-03-06 14:30:06',
    //     docStatus: '待审',
    //     docSubject: '厦门  前档玻璃  问题',
    //     fdEmergencyLevel: '紧急',
    //     fdFactory: '6100',
    //     fdLastModifiedTime: '2024-12-25 14:32:00',
    //     fdNumber: 'HZ202412250009',
    //     fdProblemDesc: '前档玻璃 缺料，请落实具体到货时间',
    //     fdTechRequire: '前档玻璃  问题',
    //     personInfo: [
    //       {
    //         ryName: '卢扬',
    //         ryId: '2768',
    //         rygh: '1000795',
    //         ryDepart: '\\金龙客车\\其他体系\\离职人员\\黑名单',
    //       },
    //     ],
    //     stationName: '乘客门工位',
    //     stationNo: 'D401',
    //     submitDepart: '总装公交产线',
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
