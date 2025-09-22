export const useUEInterface = () => {
  const setupUEInterface = () => {
    workshop();
  };

  const workshop = () => {
    window.ue.interface = (res: '总装车间' | '喷涂车间' | '总检车间') => {
      console.log('res :>> ', res);
    };
  };

  return {
    setupUEInterface,
  };
};
