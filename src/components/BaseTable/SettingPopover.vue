<template>
  <a-tooltip>
    <template #title>列设置</template>
    <a-popover placement="bottomLeft">
      <template #title>
        <div class="title-container">
          <a-checkbox
            v-model:checked="checkAll"
            :autofocus="true"
            :indeterminate="indeterminate"
            @change="onCheckAllChange">
            <span> 列表展示 / 排序</span>
          </a-checkbox>
          <a-button type="link" @click="toReset">重置</a-button>
        </div>
      </template>
      <template #content>
        <a-checkbox-group v-model:value="checkedList" style="width: 100%">
          <draggable v-model="options" group="people" style="width: 100%;" dragClass="dragClass" item-key="key">
            <template #item="{ element }">
              <div style="width: 100%;">
                <a-space style="width: 100%;">
                  <HolderOutlined />
                  <a-checkbox :value="element.value">{{ element.label }}</a-checkbox>
                </a-space>
              </div>
            </template>
          </draggable>
        </a-checkbox-group>
      </template>
      <SettingOutlined />
    </a-popover>
  </a-tooltip>
</template>

<script lang="ts" setup>
import { ref, inject, watch } from 'vue'
import { SettingOutlined, HolderOutlined } from '@ant-design/icons-vue'
import draggable from 'vuedraggable'
import type { TableColumnType } from 'ant-design-vue';

/* 接收外部参数 */
interface PropsType {
  defaultColumns: TableColumnType[];
}
const props = defineProps<PropsType>();
const emits = defineEmits(['update:value'])
// const getColumns: any = inject('columns', [])


/**
 * 获取默认配置信息
 * @return {*}
 */
const options = ref<any>([])
const checkedList = ref<any>([])
const getOptions = (values: any) => {
  const newArr: { label: string, value: any }[] = []
  values.forEach((item: any) => {
    if (!item.key) return
    newArr.push({
      label: item.title,
      value: item.key,
    })
  });
  return newArr
}
watch(() => props.defaultColumns, (values) => {
  options.value = getOptions(values)
  checkedList.value = options.value.map((item:any) => item.value)
}, {
  immediate: true,
  deep: true,
})

/**
 * 交互数据
 * @return {*}
 */
const indeterminate = ref<boolean>(false)
const checkAll = ref<boolean>(true)
const onCheckAllChange = (e: any) => {
  const defaultOptions = getOptions(props.defaultColumns)
  checkedList.value = e.target.checked ? defaultOptions.map((item:any) => item.value) : []
  indeterminate.value = false
}

/**
 * 重置数据
 * @return {*}
 */
const toReset = () => {
  const defaultOptions = getOptions(props.defaultColumns)
  options.value = [...defaultOptions]
  checkedList.value = defaultOptions.map((item:any) => item.value)
}

/**
 * 监听所选项 更新 columns
 * @return {*}
 */
watch([checkedList, options], (values) => {
  const newColumns:TableColumnType[] = [...props.defaultColumns.filter((item: any) => !item.key)]
  const saveColumns = props.defaultColumns.filter((item: any) => !!item.key)
  // 从option中过滤出排序号的key
  const filterOptionsValue = values[1].filter((item:any) => !!values[0].includes(item.value)).map((item:any) => item.value)
  if (values[0]) {
    indeterminate.value = !!values[0].length && values[0].length < saveColumns.length;
    checkAll.value = values[0].length === saveColumns.length
    filterOptionsValue.forEach((val:any) => {
      const findItem:any = saveColumns.find((c:any) => c.key === val)
      newColumns.push(findItem)
    });
    emits('update:value', newColumns)
  } else {
    indeterminate.value = false
  }
}, {
  immediate: true,
  deep: true
})
</script>

<style scoped lang="less">
.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dragClass {
  background-color: rgba(5, 5, 5, 0.06);
}
</style>
