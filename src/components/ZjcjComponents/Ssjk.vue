<template>
  <BaseCard title="实时监控" :title-type="true" class="card">
    <div>
      <div style="display: flex;">
        <div class="list">
          <div class="listItem" v-for="item in list" :key="item.code"
            :style="{ color: selected == item.code ? '#59c18e' : '#fff' }" @click="selected = item.code">{{ item.content
            }}
          </div>
        </div>
        <div class="video">
          <img src="@/assets/images/ptcj/spjk.png" alt="" style="width: 100%;">
        </div>
      </div>
    </div>
  </BaseCard>
</template>
<script setup lang="ts">
import BaseCard from "@/components/BaseCard/index.vue";

import { onMounted, ref } from "vue";

const selected = ref("");
const list = ref([
  {
    gw: "工位1",
    content: "监控1",
    code: "1"
  },
  {
    gw: "工位1",
    content: "监控2",
    code: "2"
  },
])

const getData = async () => {

};
onMounted(() => {
  // getData();
});
</script>
<style lang="less" scoped>
.card {
  position: absolute;
  left: 60px;
  top: 160px;
  width: 66vw;
  height: 830px;
}


.list {
  height: calc(400px - 63px);
  overflow-y: scroll;
  margin-top: 10px;
}

.listItem {
  width: 150px;
  text-align: center;
  height: auto;
  padding: 1px 20px;
  line-height: 44px;
  font-size: 16px;
  background-color: rgba(75, 162, 132, 0.3); // 偶数行浅色背景
  margin: 5px 0;
  cursor: pointer;

  &:active {
    color: #59c18e;
  }
}

.video {
  // margin-top: 15px;
  width: 53vw;
  height: 71vh;
  margin: 15px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
