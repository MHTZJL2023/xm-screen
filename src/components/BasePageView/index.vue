<template>
  <div class="pageView">
    <div class="tool">
      <div class="sideControl" @click="toggleVisible"></div>
      <div class="sel" v-show="isVisible">
        <div class="selected" @click="isLeftSelect = !isLeftSelect">
          <img src="@/assets/images/main/gongweitubiao.png" alt="" />
          <div class="sel_title">{{ leftSelected.label }}</div>
          <div style="margin-left: auto;margin-right: 10px;color: #ffffff80;font-size: 12px;">
            <DownOutlined v-if="!isLeftSelect" />
            <UpOutlined v-else />
          </div>
        </div>
        <div class="sel_content" v-if="isLeftSelect">
          <div class="item" v-for="item in leftList" :key="item.value" @click="changeSelected1(item)">{{
            item.label
          }}</div>
        </div>
      </div>
      <div class="sel" v-show="isVisible">
        <div class="selected" @click="isRightSelect = !isRightSelect">
          <img src="@/assets/images/main/chejiantubiao.png" alt="" />
          <div class="sel_title">{{ rightSelected.label }}</div>
          <div style="margin-left: auto;margin-right: 10px;color: #ffffff80;font-size: 12px;">
            <DownOutlined v-if="!isRightSelect" />
            <UpOutlined v-else />
          </div>
        </div>
        <div class="sel_content" v-if="isRightSelect">
          <div class="item" v-for="item in rightList" :key="item.value" @click="changeSelected2(item)">{{
            item.label
          }}</div>
        </div>
      </div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DownOutlined, UpOutlined } from '@ant-design/icons-vue';
import { ref } from "vue";
import { LEFT_LIST, RIGHT_LIST } from '@/config/data_config'


// 定义响应式变量控制显示/隐藏
const isVisible = ref(true);
const isLeftSelect = ref(false);
const isRightSelect = ref(false);
const leftList = ref([...LEFT_LIST])
const leftSelected = ref('');
const rightList = ref([])
const rightSelected = ref('');

// 切换显示/隐藏状态的方法
const toggleVisible = () => {
  isVisible.value = !isVisible.value;
};

// 切换选中项的方法
const changeSelected1 = (item: string) => {
  if (item.value === leftSelected.value) {
    leftSelected.value = ''
    return
  }
  leftSelected.value = item;

  if (item.value === 1) {
    rightList.value = [...RIGHT_LIST]
  } else {
    rightList.value = []

  }
}

const changeSelected2 = (item: string) => {
  if (item.value === rightSelected.value) {
    rightSelected.value = ''
    return
  }

  rightSelected.value = item;
}

</script>

<style scoped lang="less">
.pageView {
  margin: 80px 20px 20px 20px;

  .tool {
    display: flex;
    gap: 50px;
    min-height: 53px;
    align-items: center;

    .sideControl {
      cursor: pointer;
      width: 37px;
      height: 27px;
      background: url(@/assets/images/main/cemianshouhuianniu.png);
    }

    .sel {
      cursor: pointer;
      width: 154px;
      height: 53px;
      background: url(@/assets/images/main/xuanzhonggongweibeijing.png);

      img {
        margin: 10px 10px
      }

      .selected {
        display: flex;
        align-items: center;
      }

      .sel_content {
        max-height: 200px;
        overflow-y: scroll;

        .item {
          width: 100%;
          height: auto;
          background-color: #56987d30;
          min-height: 40px;
          border-bottom: #56987d 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            background-color: #56987d;
          }

        }
      }
    }
  }

  .content {
    margin: 20px 34px;
    pointer-events: painted;
  }

  .footer {
    display: flex;
    margin-top: 600px;
    margin-left: 90px;
    pointer-events: painted;
  }
}
</style>
