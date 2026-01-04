import { useUEInterfaceStore } from '@/stores/modules/ueInterfaceStore';

export const useUEInterface = () => {
  const ueStore = useUEInterfaceStore();
  const setupUEInterface = () => {
    workshop();
  };

  const workshop = () => {
    ueStore.setWorkshop('终检车间');
    window.ue.interface.ClickWorkshop = (res: { data: '总装车间' | '喷涂车间' | '终检车间' | '示范工位' }) => {
      ueStore.setWorkshop(res.data);
    };
  };

  return {
    setupUEInterface,
  };
};
