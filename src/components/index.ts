/*
 * @Author: chenr 526963089@qq.com
 * @Date: 2024-08-12 17:18:28
 * @LastEditors: chenr 526963089@qq.com
 * @LastEditTime: 2024-10-31 08:55:49
 * @FilePath: /vite-project/src/components/index.ts
 * @Description:
 */
import BaseTable from '@/components/BaseTable/index.vue';
import BaseTableSettingPopover from '@/components/BaseTable/SettingPopover.vue';
import BaseTableSizeSelectDropdown from '@/components/BaseTable/SizeSelectDropdown.vue';
import BaseFullscreen from '@/components/BaseFullscreen/index.vue';
import BasePageView from '@/components/BasePageView/index.vue';
import BaseLoadStatus from '@/components/BaseLoadStatus/index.vue';
import BaseNumberAnimation from '@/components/BaseNumberAnimation/index.vue';
import BaseStatistic from '@/components/BaseStatistic/index.vue';
import BaseBorderContainer from '@/components/BaseBorderContainer/index.vue';

export default (app: any) => {
  app.component('BaseTable', BaseTable);
  app.component('BaseTableSettingPopover', BaseTableSettingPopover);
  app.component('BaseTableSizeSelectDropdown', BaseTableSizeSelectDropdown);
  app.component('BaseFullscreen', BaseFullscreen);
  app.component('BasePageView', BasePageView);
  app.component('BaseLoadStatus', BaseLoadStatus);
  app.component('BaseNumberAnimation', BaseNumberAnimation);
  app.component('BaseStatistic', BaseStatistic);

  app.component('BaseBorderContainer', BaseBorderContainer);
};
