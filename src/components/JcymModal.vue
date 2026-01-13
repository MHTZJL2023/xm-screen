<template>
  <a-modal
    class="my-modal"
    title=""
    :footer="null"
    v-model:open="props.visible"
    @cancel="emits('colse')"
    width="1000px"
    centered>
    <div class="content">
      <div class="search">
        <a-input-search
          class="my-input"
          placeholder="请输入车辆编号"
          v-model:value="code"
          @search="onSearch"
          style="width: 250px" />
        <div class="button-container">
          <a-button
            class="my-button-custom"
            style="width: 180px; height: 40px; margin-top: 20px"
            @click="yuzhiVisisble = true">
            上传图纸
          </a-button>
          <a-button
            class="my-button-custom"
            style="width: 180px; height: 40px; margin-top: 20px"
            @click="setVisible = true">
            阈值设置
          </a-button>
          <a-button
            class="my-button-custom"
            style="width: 180px; height: 40px; margin-top: 20px"
            @click="photoVisisble = true">
            准备拍摄
          </a-button>
        </div>
      </div>
      <div class="photo">
        <p>设计图纸</p>
        <div class="image">
          <img src="@/assets/images/zjcj/image.png" alt="" />
        </div>
      </div>
    </div>
  </a-modal>

  <a-modal
    class="my-modal"
    title="阈值设置"
    :footer="null"
    v-model:visible="setVisible"
    width="500px"
    centered>
    <a-table
      class="table"
      size="small"
      :columns="columns"
      :data-source="data"
      :pagination="false">
      <template #valueSet="{ record }">
        <a-input
          class="my-input"
          v-model:value="record.valueSet"
          style="width: 100px"
          :scroll="{ y: 300 }" />
      </template>
    </a-table>
    <div class="footer" style="margin-top: 0px">
      <a-button style="width: 100px" @click="setVisible = false">取消</a-button>
      <a-button
        class="my-button-custom"
        style="width: 100px; margin-left: 20px">
        保存
      </a-button>
    </div>
  </a-modal>

  <a-modal
    class="my-modal"
    title="拍摄结果"
    :footer="null"
    v-model:visible="photoVisisble"
    width="1000px"
    centered>
    <a-row :gutter="[12, 16]">
      <a-col
        v-for="(item, index) in photos"
        :span="index % 2 ? 15 : 9"
        :key="item.name">
        <img :src="imgs[index]" alt="" style="width: 100%; height: 200px" />
        <div class="text">{{ item.name }}</div>
      </a-col>
    </a-row>
    <div class="footer">
      <a-button class="my-button-custom" style="width: 100px" @click="onStart">
        启动
      </a-button>
      <a-button
        class="my-button-custom"
        style="width: 100px; margin-left: 20px"
        @click="onStop">
        终止
      </a-button>
      <a-button
        class="my-button-custom"
        style="width: 100px; margin-left: 20px"
        @click="onReset">
        复位
      </a-button>
      <a-button
        class="my-button-custom"
        style="width: 100px; margin-left: 20px"
        @click="detailsOpen = true">
        检测
      </a-button>
    </div>
  </a-modal>
  <JcxqModal :visible="detailsOpen" @colse="detailsOpen = false" />
  <PhotoModal :visible="yuzhiVisisble" @colse="yuzhiVisisble = false" />
</template>
<script setup lang="ts">
import JcxqModal from '@/components/JcxqModal.vue';
import PhotoModal from '@/components/PtcjComponents/PhotoModal.vue';

import { onMounted, ref } from 'vue';
import Img1 from '@/assets/images/zjcj/img1.png';
import Img2 from '@/assets/images/zjcj/img2.png';
import Img3 from '@/assets/images/zjcj/img3.png';
import Img4 from '@/assets/images/zjcj/img4.png';
import {
  carReset,
  carStart,
  carStop,
  getAgvResultStitch,
  getCarDesignImage,
} from '@/service/v1';

interface Props {
  visible: boolean;
}
const props = defineProps<Props>();
const emits = defineEmits(['colse']);
const imgs = ref([Img1, Img3, Img2, Img4]);
const code = ref('');
const setVisible = ref(false);
const detailsOpen = ref(false);
const photoVisisble = ref(false);
const yuzhiVisisble = ref(false);
const task_id = ref('');
const photos = ref([
  {
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    name: '前围',
  },
  {
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    name: '左侧',
  },
  {
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    name: '后围',
  },
  {
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    name: '右侧',
  },
]);
const data = [
  {
    name: '颜色',
    value: '1',
  },
  {
    name: '图案',
    value: '5',
  },
  {
    name: '空调样式',
    value: '3',
  },
  {
    name: '空调位置',
    value: '10',
  },
];

const columns = [
  {
    title: '检测类型',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '默认阈值',
    dataIndex: 'value',
    key: 'value',
  },
  {
    title: '自定义阈值',
    dataIndex: 'valueSet',
    key: 'valueSet',
    slots: { customRender: 'valueSet' },
  },
];
const getPhoto = async () => {
  try {
    const res = await getCarDesignImage('R5U00688');

    // const res =  {
    //     leftDesignImage: "data:image/jpeg;base64,...",
    //     rightDesignImage: "data:image/jpeg;base64,...",
    //     frontDesignImage: "data:image/jpeg;base64,...",
    //     afterDesignImage: "data:image/jpeg;base64,...",
    //     clbh: 'R5U00688'
    // },
    photos.value = [
      {
        url: res.frontDesignImage,
        name: '前围',
      },
      {
        url: res.leftDesignImage,
        name: '左侧',
      },
      {
        url: res.afterDesignImage,
        name: '后围',
      },
      {
        url: res.rightDesignImage,
        name: '右侧',
      },
    ];
  } catch (err) {
    console.log(err);
  }
};
const onSearch = () => {
  console.log('code', code.value);
};

const getRightPhoto = async () => {
  try {
    const res = await getAgvResultStitch({ task_id: task_id.value });

    imgs[3] = resizeBy.data;
  } catch (err) {
    console.log(err);
  }
};

// 启动
const onStart = async () => {
  try {
    const res = await carStart({
      clbh: 'R5U00688',
    });

    // const res = {
    //   current_state: 'running',
    //   mode: 'auto',
    //   params: {
    //     photo_side: 'right',
    //   },
    //   start_time: '2023-10-05T14:48:00.000Z',
    //   task_id: '20251226001',
    // };
    task_id.value = res.task_id;
    getRightPhoto();
    message.success('启动成功！');
  } catch (err) {
    console.log(err);
  }
};

// 终止
const onStop = async () => {
  try {
    const res = await carStop();

    message.success('终止成功！');
  } catch (err) {
    console.log(err);
  }
};

// 复位
const onReset = async () => {
  try {
    const res = await carReset();

    message.success('复位成功！');
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  getPhoto();
});
</script>
<style scoped lang="less">
.content {
  display: flex;
  padding: 20px 10px;
  overflow-y: scroll;
  height: 450px;

  .search {
    width: 30%;
    margin-right: 40px;
    margin-top: 20px;
    text-align: center;

    :deep(.ant-input-search-button) {
      background: #56b88e00 !important;
      color: #56b88e !important;
      border: 1px solid #56b88e;
    }

    .button-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;

      .my-button-custom {
        width: 180px;
        margin-bottom: 10px;
      }
    }
  }

  .photo {
    width: 70%;

    .title {
      position: absolute;
      top: 120px;
      left: 31vw;
      border: 1px solid #fff;
      background: #fff;
      padding: 5px;
      color: #000;
    }

    p {
      font-size: 19px;
      font-weight: bold;
    }

    .image {
      width: 100%;
      height: 400px;
      border: 1px solid #56b88e;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.table {
  :deep(.ant-table) {
    background-color: transparent;
  }

  :deep(.ant-table-thead > tr > th) {
    background-color: rgba(0, 0, 0, 0.1);
  }

  :deep(.ant-table-tbody > tr > td) {
    background-color: transparent;
  }

  :deep(.ant-table-tbody > tr:hover > td) {
    background-color: rgba(0, 0, 0, 0.05);
  }
}

.footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.text {
  font-size: 15px;
  color: #56b88e;
}
</style>
