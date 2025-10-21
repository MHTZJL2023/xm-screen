<template>
  <a-modal class="my-modal" title="检测详情" :footer="null" v-model:open="props.visible" @cancel="emits('colse')"
    width="1000px" centered>
    <div class="btns">
      <a-button class="my-button-custom" @click="onReport">检测报告</a-button>
      <a-button class="my-button-custom" style="margin-left: 20px;" @click="showReport = false">返回</a-button>
    </div>
    <div class="content" v-if="!showReport">
      <div class="colorCheck">
        <p>图案颜色检测</p>
        <div style="display: flex;">
          <a-button class="my-button-custom" style="margin-bottom: 20px;margin-right: 20px;"
            @click="onClick(0)">前围</a-button>
          <a-button class="my-button-custom" @click="onClick(1)">后围</a-button>
          <div class="detail">颜色误差：5% 检测结果：合格</div>
        </div>
        <div style="display: flex;">
          <a-button class="my-button-custom" style="margin-bottom: 20px;margin-right: 20px;"
            @click="onClick(2)">左侧</a-button>
          <a-button class="my-button-custom" @click="onClick(3)">右侧</a-button>
          <div class="detail">图案误差：5个 检测结果：合格</div>
        </div>
        <div class="imgs">
          <img src="@/assets/images/zjcj/image1.png" />
          <img src="@/assets/images/zjcj/image2.png" />
        </div>
      </div>
      <div class="poiCheck">
        <p>空调位检测</p>
        <div style="display: flex;justify-content: center;">
          <div class="info">空调样式：错误 位置偏差：0%。 检测结果：不合格 </div>
        </div>
        <div class="imgs">
          <img src="@/assets/images/zjcj/image3.png" />
          <img src="@/assets/images/zjcj/image4.png" />
        </div>
      </div>
    </div>

    <div style="display: flex;justify-content: center;">
      <div class="report" v-if="showReport">
        <p>检测报告</p>
        <div class="info">
          <span>车辆编号：XXXXX01</span>
          <span style="margin-left: 80px;">检测时间：2023-05-05 10:10:10</span>
        </div>
        <a-table class="my-table" size="small" :columns="columns" :data-source="data" :pagination="false"
          :scroll="{ y: '370px' }" style="height: 400px;">
          <template #result="{ record }">
            <div :style="{ color: record.result === '异常' ? 'red' : '#fff' }">{{ record.result }}</div>
          </template>
        </a-table>
      </div>
    </div>
  </a-modal>
</template>
<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  visible: boolean;
}

const props = defineProps<Props>();
const emits = defineEmits(['colse']);
const selected = ref()
const showReport = ref(false);

const columns = [
  {
    title: '检测项目',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: '检测内容',
    dataIndex: 'content',
    key: 'content',
    align: 'center',
  },
  {
    title: '检测结果',
    dataIndex: 'result',
    key: 'result',
    align: 'center',
    slots: { customRender: 'result' },
  },
]

const data = [
  {
    name: '图案颜色检测',
    content: '前围',
    result: '合格'
  },
  {
    name: '图案颜色检测',
    content: '后围',
    result: '合格'
  },
  {
    name: '图案颜色检测',
    content: '左侧',
    result: '合格'
  },
  {
    name: '图案颜色检测',
    content: '左侧',
    result: '异常'
  },
  {
    name: '图案颜色检测',
    content: '后围',
    result: '合格'
  },
  {
    name: '图案颜色检测',
    content: '左侧',
    result: '合格'
  },
  {
    name: '图案颜色检测',
    content: '左侧',
    result: '异常'
  },
  {
    name: '图案颜色检测',
    content: '左侧',
    result: '合格'
  },
  {
    name: '图案颜色检测',
    content: '左侧',
    result: '异常'
  },
  {
    name: '图案颜色检测',
    content: '后围',
    result: '合格'
  },
  {
    name: '图案颜色检测',
    content: '左侧',
    result: '合格'
  },
  {
    name: '图案颜色检测',
    content: '左侧',
    result: '异常'
  },
]

const onClick = (index) => {
  selected.value = index
};

const onReport = () => {
  showReport.value = true;
};
</script>
<style scoped lang="less">
.btns {
  display: flex;
  justify-content: flex-end;
}

.content {
  display: flex;
  padding: 20px 10px;

  .colorCheck {
    width: 45%;
    border: 1px solid #E8E8E8;
    margin-right: 10%;
    padding: 0 20px 20px 20px;
    height: 450px;

    p {
      width: 100%;
      text-align: center;
      border-bottom: 1px solid #E8E8E8;
    }

    .detail {
      line-height: 30px;
      margin-left: 40px;
    }

    .imgs {
      img {
        width: 100%;
        height: 140px;
      }
    }
  }

  .poiCheck {
    width: 45%;
    border: 1px solid #E8E8E8;
    padding: 0 20px 20px 20px;
    height: 450px;

    p {
      width: 100%;
      text-align: center;
      margin-bottom: 20px;
      border-bottom: 1px solid #E8E8E8;
    }

    .info {
      margin-bottom: 20px;
    }

    .imgs {
      img {
        width: 100%;
        height: 160px;
      }
    }
  }

}

.report {
  width: 50%;
  border: 1px solid #E8E8E8;
  padding: 0 20px 20px 20px;

  p {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;
  }

  .info {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .imgs {
    img {
      width: 100%;
      height: 200px;
    }
  }
}
</style>
