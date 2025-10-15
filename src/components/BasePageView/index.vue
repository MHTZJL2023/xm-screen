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
    <div v-if="ueStore.currentWorkshop === '终检车间'" class="content">
      <div style="display: flex;">
        <div class="btns">
          <a-button class="my-button-tool" @click="toJcy">检测页</a-button>
          <a-button class="my-button-tool" style="margin-left: 20px;" @click="toZym"> 主界面</a-button>
        </div>
        <Ssjk />
        <Ktwjc @onDetailsOpen="detailsOpen = true" />
        <Ystajc @onDetailsOpen="detailsOpen = true" />
      </div>
    </div>
    <div v-else-if="ueStore.currentWorkshop === '示范工位'" class="content">
      <div style="display: flex;">
        <div class="btns">
          <a-button class="my-button-tool" @click="toZym"> 主界面</a-button>
        </div>
        <Ryxx />
        <Sbzt />
        <Spjk />
        <Sfgwgj />
        <Yzhtbdw />
      </div>
    </div>
    <div v-else-if="ueStore.currentWorkshop" class="content">
      <div class="btns" v-if="zzcjVisible">
        <a-button class="my-button-tool" @click="zzcjBack">返回</a-button>
      </div>
      <slot></slot>
    </div>
    <div v-if="ueStore.currentWorkshop" class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
  <JcymModal :visible="jcymVisible" @colse="jcymVisible = false" />
  <JcxqModal :visible="detailsOpen" @colse="detailsOpen = false" />
</template>

<script lang="ts" setup>
import JcxqModal from "@/components/JcxqModal.vue";
import JcymModal from '@/components/JcymModal.vue'
import Ryxx from "@/components/SfgwComponents/Ryxx.vue";
import Sbzt from "@/components/SfgwComponents/Sbzt.vue";
import Sfgwgj from "@/components/SfgwComponents/Sfgwgj.vue";
import Spjk from "@/components/SfgwComponents/Ssjk.vue";
import Yzhtbdw from "@/components/SfgwComponents/Yzhtbdw.vue";
import Ktwjc from "@/components/ZjcjComponents/Ktwjc.vue";
import Ssjk from "@/components/ZjcjComponents/Ssjk.vue";
import Ystajc from "@/components/ZjcjComponents/Ystajc.vue";

import { DownOutlined, UpOutlined } from '@ant-design/icons-vue';
import { ref, watch } from "vue";
import { LEFT_LIST, RIGHT_LIST } from '@/config/data_config'
import { useUEInterfaceStore } from '@/stores/modules';


const ueStore = useUEInterfaceStore();

// 定义响应式变量控制显示/隐藏
const isVisible = ref(true);
const isLeftSelect = ref(false);
const isRightSelect = ref(false);
const leftList = ref([...LEFT_LIST])
const leftSelected = ref('');
const rightList = ref([])
const rightSelected = ref('');
const jcymVisible = ref(false);
const zzcjVisible = ref(false);

const detailsOpen = ref(false)
const previousWorkshop = ref<any>(null);

// 切换显示/隐藏状态的方法
const toggleVisible = () => {
  isVisible.value = !isVisible.value;
};

const toJcy = () => {
  jcymVisible.value = true
}

const toZym = () => {
  ueStore.currentWorkshop = '总装车间'
}

const zzcjBack = () => {
  window.ue5('Web_隐藏/显示总装车间', false);
  zzcjVisible.value = false
  // 使用上一次的 workshop 值
  ueStore.setWorkshop(previousWorkshop.value);
}

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

// 监听 ueStore.currentWorkshop 的变化
watch(
  () => ueStore.currentWorkshop,
  (newWorkshop, oldWorkshop) => {
    // 记录上一次的 workshop 值
    previousWorkshop.value = oldWorkshop;

    // 当 currentWorkshop 为 '总装车间' 时，设置 zzcjVisible 为 true
    console.log('11', newWorkshop)
    if (newWorkshop === '总装车间') {
      window.ue5('Web_隐藏/显示总装车间', true);
      zzcjVisible.value = true
    }
  },
  { immediate: true } // 立即触发一次回调
);

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

  .btns {
    position: absolute;
    right: 60px;
    top: 100px;
    display: flex;
  }
}
</style>
