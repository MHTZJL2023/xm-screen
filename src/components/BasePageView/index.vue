<template>
  <div class="pageView">
    <div class="tool">
      <div class="sideControl" @click="toggleVisible"></div>
      <div class="sel" v-show="isVisible">
        <div class="selected" @click="isLeftSelect = !isLeftSelect">
          <img src="@/assets/images/main/gongweitubiao.png" alt="" />
          <div class="sel_title">{{ leftSelected }}</div>
          <div style="margin-left: auto;margin-right: 10px;color: #ffffff80;font-size: 12px;">
            <DownOutlined v-if="!isLeftSelect" />
            <UpOutlined v-else />
          </div>
        </div>
        <div class="sel_content" v-if="isLeftSelect">
          <div class="item" v-for="item in leftList" :key="item.value" @click="changeSelected1(item.label)">{{
            item.label
            }}</div>
        </div>
      </div>
      <div class="sel" v-show="isVisible">
        <div class="selected" @click="isRightSelect = !isRightSelect">
          <img src="@/assets/images/main/chejiantubiao.png" alt="" />
          <div class="sel_title">{{ rightSelected }}</div>
          <div style="margin-left: auto;margin-right: 10px;color: #ffffff80;font-size: 12px;">
            <DownOutlined v-if="!isRightSelect" />
            <UpOutlined v-else />
          </div>
        </div>
        <div class="sel_content" v-if="isRightSelect">
          <div class="item" v-for="item in rightList" :key="item.value" @click="changeSelected2(item.label)">{{
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


// 定义响应式变量控制显示/隐藏
const isVisible = ref(true);
const isLeftSelect = ref(false);
const isRightSelect = ref(false);
const leftList = ref([
  { label: '总装车间', value: 1 },
  { label: '喷涂车间', value: 2 },
  { label: '终检车间', value: 3 },
])
const leftSelected = ref('');
const rightList = ref([
  { label: '准备车位', value: 1 },
  { label: '顶棚线', value: 2 },
  { label: '顶棚', value: 3 },
  { label: '行李架', value: 4 },
  { label: '地板革', value: 5 },
  { label: '压条1', value: 6 },
  { label: '压条2', value: 7 },
  { label: '车内电器', value: 8 },
  { label: '侧玻安装', value: 9 },
  { label: '内饰仪表', value: 10 },
  { label: '门', value: 11 },
  { label: '前后挡', value: 12 },
  { label: '座椅1', value: 13 },
  { label: '座椅2', value: 14 },
  { label: '调试', value: 15 },
  { label: '刮胶', value: 16 },
  { label: '修整', value: 17 },
])
const rightSelected = ref('');

// 切换显示/隐藏状态的方法
const toggleVisible = () => {
  isVisible.value = !isVisible.value;
};

// 切换选中项的方法
const changeSelected1 = (label: string) => {
  if (label === leftSelected.value) {
    leftSelected.value = ''
    return
  }
  leftSelected.value = label;
}

const changeSelected2 = (label: string) => {
  if (label === rightSelected.value) {
    rightSelected.value = ''
    return
  }

  rightSelected.value = label;
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
