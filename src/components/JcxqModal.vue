<template>
  <a-modal
    class="my-modal"
    title="检测详情"
    :footer="null"
    v-model:open="props.visible"
    @cancel="emits('colse')"
    width="1000px"
    centered>
    <div class="btns">
      <a-button class="my-button-custom" @click="onReport">检测报告</a-button>
      <a-button
        class="my-button-custom"
        style="margin-left: 20px"
        @click="showReport = false">
        返回
      </a-button>
    </div>
    <div class="content" v-if="!showReport">
      <div class="colorCheck">
        <p>图案颜色检测</p>
        <div style="display: flex">
          <a-button
            class="my-button-custom"
            style="margin-bottom: 20px; margin-right: 20px"
            @click="onClick(0)">
            前围
          </a-button>
          <a-button class="my-button-custom" @click="onClick(1)">后围</a-button>
          <div class="detail">颜色误差：5% 检测结果：合格</div>
        </div>
        <div style="display: flex">
          <a-button
            class="my-button-custom"
            style="margin-bottom: 20px; margin-right: 20px"
            @click="onClick(2)">
            左侧
          </a-button>
          <a-button class="my-button-custom" @click="onClick(3)">右侧</a-button>
          <div class="detail">图案误差：5个 检测结果：合格</div>
        </div>
        <div class="imgs">
          <img :src="photos[selected].url1" />
          <img :src="photos[selected].url2" />
        </div>
      </div>
      <div class="poiCheck">
        <p>空调位检测</p>
        <div style="display: flex; justify-content: center">
          <div class="info">空调样式：错误 位置偏差：0%。 检测结果：不合格</div>
        </div>
        <div class="imgs">
          <img src="@/assets/images/zjcj/image3.png" />
          <img src="@/assets/images/zjcj/image4.png" />
        </div>
      </div>
    </div>

    <div style="display: flex; justify-content: center">
      <div class="report" v-if="showReport">
        <p>检测报告</p>
        <div class="info">
          <span>车辆编号：XXXXX01</span>
          <span style="margin-left: 80px">检测时间：2023-05-05 10:10:10</span>
        </div>
        <a-table
          class="my-table"
          size="small"
          :columns="columns"
          :data-source="data"
          :pagination="false"
          :scroll="{ y: '370px' }"
          style="height: 400px">
          <template #result="{ record }">
            <div :style="{ color: record.result === '异常' ? 'red' : '#fff' }">
              {{ record.result }}
            </div>
          </template>
        </a-table>
      </div>
    </div>
  </a-modal>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Image1 from '@/assets/images/zjcj/image1.png';
import Image2 from '@/assets/images/zjcj/image2.png';
import { getAgvResultStitch, getCarDesignImage } from '@/service/v1';

interface Props {
  visible: boolean;
}

const props = defineProps<Props>();
const emits = defineEmits(['colse']);
const selected = ref('0');
const showReport = ref(false);
const photos = ref([
  {
    url1: Image1,
    url2: Image2,
    name: '前围',
  },
  {
    url1: '',
    url2: '',
    name: '左侧',
  },
  {
    url1: '',
    url2: '',
    name: '后围',
  },
  {
    url1: '',
    url2: '',
    name: '右侧',
  },
]);
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
];

const data = [
  {
    name: '图案颜色检测',
    content: '前围',
    result: '合格',
  },
  {
    name: '图案颜色检测',
    content: '后围',
    result: '合格',
  },
  {
    name: '图案颜色检测',
    content: '左侧',
    result: '合格',
  },
  {
    name: '图案颜色检测',
    content: '左侧',
    result: '异常',
  },
  {
    name: '图案颜色检测',
    content: '后围',
    result: '合格',
  },
  {
    name: '图案颜色检测',
    content: '左侧',
    result: '合格',
  },
  {
    name: '图案颜色检测',
    content: '左侧',
    result: '异常',
  },
  {
    name: '图案颜色检测',
    content: '左侧',
    result: '合格',
  },
  {
    name: '图案颜色检测',
    content: '左侧',
    result: '异常',
  },
  {
    name: '图案颜色检测',
    content: '后围',
    result: '合格',
  },
  {
    name: '图案颜色检测',
    content: '左侧',
    result: '合格',
  },
  {
    name: '图案颜色检测',
    content: '左侧',
    result: '异常',
  },
];

const onClick = index => {
  selected.value = index;
};

const onReport = () => {
  showReport.value = true;
};

const getPhoto = async () => {
  try {
    const res = await getCarDesignImage({ clbh: 'R5U00688' });
    const res1 = await getAgvResultStitch({ task_id: '20231005001' });

    // const res =  {
    //     leftDesignImage: "data:image/jpeg;base64,...",
    //     rightDesignImage: "data:image/jpeg;base64,...",
    //     frontDesignImage: "data:image/jpeg;base64,...",
    //     afterDesignImage: "data:image/jpeg;base64,...",
    //     clbh: 'R5U00688'
    // },
    photos.value = [
      {
        url1: res.frontDesignImage,
        url2: '',
        name: '前围',
      },
      {
        url1: res.leftDesignImage,
        url2: '',
        name: '左侧',
      },
      {
        url1: res.afterDesignImage,
        url2: '',
        name: '后围',
      },
      {
        url1: res.rightDesignImage,
        url2: res1.data,
        name: '右侧',
      },
    ];
  } catch (err) {
    console.log(err);
  }
};
onMounted(() => {
  getPhoto();
});
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
    border: 1px solid #e8e8e8;
    margin-right: 10%;
    padding: 0 20px 20px 20px;
    height: 450px;

    p {
      width: 100%;
      text-align: center;
      border-bottom: 1px solid #e8e8e8;
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
    border: 1px solid #e8e8e8;
    padding: 0 20px 20px 20px;
    height: 450px;

    p {
      width: 100%;
      text-align: center;
      margin-bottom: 20px;
      border-bottom: 1px solid #e8e8e8;
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
  border: 1px solid #e8e8e8;
  padding: 0 20px 20px 20px;

  p {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;
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
