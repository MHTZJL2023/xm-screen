<template>
  <BasePageView>
    <BaseCard title="异常查询" :title-type="true" class="cjyhpcl">
      <div class="search">
        <a-input
          class="my-input"
          v-model:value="code"
          placeholder="输入车辆编号"></a-input>
        <a-button class="my-button-custom" @click="onSearch">查询</a-button>
        <a-button class="my-button-custom" @click="onReset">重置</a-button>
      </div>
      <div class="list">
        <div class="listItem" v-for="item in list" :key="item">
          <div>
            <span>车辆编号：{{ item.clch || '-' }}</span>
            <span style="margin-left: 20px">工位：{{ item.gwmc || '-' }}</span>
            <div>进场时间：{{ item.jxsj || '-' }}</div>
          </div>
          <a-button
            class="my-button-custom"
            style="margin-left: auto"
            @click="visible = true">
            监控
          </a-button>
        </div>
      </div>
    </BaseCard>
    <BaseCard :title="cxryctcb" style="position: absolute; bottom: 20px">
      <Charts :options="options2" style="height: 260px"></Charts>
    </BaseCard>
  </BasePageView>
  <a-modal
    class="my-modal"
    title="视频监控"
    :footer="null"
    v-model:visible="visible"
    @cancel="visible = false"
    :width="isFullscreen ? '100vw' : '60vw'"
    :height="isFullscreen ? '100%' : 'auto'"
    centered>
    <div class="modal-content">
      <div class="controls">
        <a-button size="small" @click="toggleFullscreen" class="fullscreen-btn">
          <ExpandOutlined v-if="!isFullscreen" />
          <CompressOutlined v-else />
        </a-button>
      </div>
      <iframe
        ref="iframeRef"
        src="https://192.168.1.32/#/home"
        :width="isFullscreen ? '100%' : '100%'"
        :height="isFullscreen ? 'calc(100% - 120px)' : '600px'"
        :style="{
          border: 'none',
          height: isFullscreen ? 'calc(100vh - 110px)' : '600px',
        }"></iframe>
    </div>
  </a-modal>
</template>
<script setup lang="ts">
import BaseCard from '@/components/BaseCard/index.vue';
import Charts from '@/components/Charts/Charts.vue';

import { CompressOutlined, ExpandOutlined } from '@ant-design/icons-vue';
import { onMounted, ref, watch } from 'vue';
import cjyhpcl from '@/assets/images/cardTitle/cjyhpcl.png';
import cxryctcb from '@/assets/images/cardTitle/cxryctcb.png';
import { getCarInfo } from '@/service/mes';
import { getProductionWarnCarsRate } from '@/service/mes';

import { Options1, Options2 } from './options';

const options1 = ref({ ...Options1 });
const options2 = ref({ ...Options2 });
const code = ref('');
const list = ref([]);
const listCopy = ref([]);
const isFullscreen = ref(false);
const visible = ref(false);
const getCjyhpcl = async () => {
  try {
    const res = await getCarInfo({ scxid: '310' });

    // const res = [
    //   {
    //     aufnr: 'R5A002380238',
    //     clch: 'R5U00679',
    //     cllbmc: '大巴',
    //     epProcess: 'Y',
    //     gwmc: '修整工位',
    //     htbh: 'SA24080014',
    //     jxsj: '2024-12-19 09:02:00',
    //     remark: '在制车',
    //     scxmc: '总装商用车专线生产线',
    //     ztbgsj: '2024-12-19 09:02:00',
    //   },
    //   {
    //     aufnr: 'R5A002370237',
    //     clch: 'R5A00237',
    //     cllbmc: '中巴',
    //     epProcess: 'Y',
    //     gwmc: '缓冲工位',
    //     htbh: 'SA24080014',
    //     jxsj: '2024-12-19 09:01:00',
    //     remark: '在制车',
    //     scxmc: '总装商用车专线生产线',
    //     ztbgsj: '2024-12-19 09:01:00',
    //   },
    //   {
    //     aufnr: 'R5A002380238',
    //     clch: 'R5U00679',
    //     cllbmc: '大巴',
    //     epProcess: 'Y',
    //     gwmc: '修整工位',
    //     htbh: 'SA24080014',
    //     jxsj: '2024-12-19 09:02:00',
    //     remark: '在制车',
    //     scxmc: '总装商用车专线生产线',
    //     ztbgsj: '2024-12-19 09:02:00',
    //   },
    //   {
    //     aufnr: 'R5A002370237',
    //     clch: 'R5A00237',
    //     cllbmc: '中巴',
    //     epProcess: 'Y',
    //     gwmc: '缓冲工位',
    //     htbh: 'SA24080014',
    //     jxsj: '2024-12-19 09:01:00',
    //     remark: '在制车',
    //     scxmc: '总装商用车专线生产线',
    //     ztbgsj: '2024-12-19 09:01:00',
    //   },
    //   {
    //     aufnr: 'R5A002380238',
    //     clch: 'R5U00679',
    //     cllbmc: '大巴',
    //     epProcess: 'Y',
    //     gwmc: '修整工位',
    //     htbh: 'SA24080014',
    //     jxsj: '2024-12-19 09:02:00',
    //     remark: '在制车',
    //     scxmc: '总装商用车专线生产线',
    //     ztbgsj: '2024-12-19 09:02:00',
    //   },
    //   {
    //     aufnr: 'R5A002370237',
    //     clch: 'R5A00237',
    //     cllbmc: '中巴',
    //     epProcess: 'Y',
    //     gwmc: '缓冲工位',
    //     htbh: 'SA24080014',
    //     jxsj: '2024-12-19 09:01:00',
    //     remark: '在制车',
    //     scxmc: '总装商用车专线生产线',
    //     ztbgsj: '2024-12-19 09:01:00',
    //   },
    // ];
    listCopy.value = res;
    list.value = res;
  } catch (err) {
    console.log(err);
  }
};

const getCjyhzgl = async () => {
  try {
    const res = await getProductionWarnCarsRate({ cxname: '总装A线生产线' });

    // const res = [
    //   { lzsj: '2025-02-28', rate: 0.0, scxmc: '总装商用车专线生产线' },
    //   { lzsj: '2025-03-01', rate: 0.0, scxmc: '总装商用车专线生产线' },
    //   { lzsj: '2025-03-02', rate: 0.0, scxmc: '总装商用车专线生产线' },
    //   { lzsj: '2025-03-03', rate: 0.0, scxmc: '总装商用车专线生产线' },
    //   { lzsj: '2025-03-04', rate: 0.0, scxmc: '总装商用车专线生产线' },
    //   { lzsj: '2025-03-05', rate: 1.0, scxmc: '总装商用车专线生产线' },
    //   { lzsj: '2025-03-06', rate: 0.0, scxmc: '总装商用车专线生产线' },
    // ];
    const x = res.map(item => [item.lzsj, item.rate]);
    options2.value.xAxis.data = x.map(item => item[0]);
    options2.value.series[0].data = x.map(item => item[1]);
  } catch (err) {
    console.log(err);
  }
};

const onReset = () => {
  code.value = '';
  list.value = listCopy.value;
};
const onSearch = () => {
  // 筛选list中code===clch
  if (code.value === '') list.value = listCopy.value;
  else
    list.value = listCopy.value.filter(item => item.clch.includes(code.value));
};

const toggleFullscreen = async () => {
  isFullscreen.value = !isFullscreen.value;

  if (isFullscreen.value) {
    // 进入全屏
    document.body.style.overflow = 'hidden';
  } else {
    // 退出全屏
    document.body.style.overflow = '';
  }
};

onMounted(() => {
  getCjyhpcl();
  getCjyhzgl();
});
</script>
<style lang="less" scoped>
.cjyhpcl {
  margin-top: 0px;
  margin-bottom: 60px;
  height: 500px;
  margin-left: auto;
}

.search {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.list {
  height: calc(460px - 63px);
  overflow-y: scroll;
  margin-top: 10px;
}

.listItem {
  display: flex;
  align-items: center;
  height: auto;
  padding: 2px 20px;
  line-height: 38px;
  font-size: 16px;
  background-color: rgba(75, 162, 132, 0.1); // 偶数行浅色背景
  margin: 5px 0;
}

.detail {
  cursor: pointer;
}

.my-modal {
  :deep(.ant-modal-content) {
    padding: 0;
  }

  :deep(.ant-modal-header) {
    border-radius: 8px 8px 0 0;
  }
}

.modal-content {
  position: relative;

  .controls {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;

    .fullscreen-btn {
      background: rgba(152, 152, 152, 0.8);
      border: 1px solid #d9d9d900;

      &:hover {
        background: rgba(152, 152, 152, 0.9);
      }
    }
  }
}
</style>
