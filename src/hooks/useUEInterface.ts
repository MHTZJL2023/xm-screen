import { useUEInterfaceStore } from '@/stores/modules/ueInterfaceStore';

export const useUEInterface = () => {
  const ueStore = useUEInterfaceStore();
  const setupUEInterface = () => {
    workshop();
  };

  const workshop = () => {
    // ueStore.setWorkshop('示范工位');
    window.ue.interface = (res: '总装车间' | '喷涂车间' | '终检车间' | '示范工位') => {
      console.log('res :>> ', res);
      // 将返回的res信息存储到store中
      ueStore.setWorkshop(res);
    };
  };

  return {
    setupUEInterface,
  };
};
