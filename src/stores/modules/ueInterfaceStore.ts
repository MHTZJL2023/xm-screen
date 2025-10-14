import { defineStore } from 'pinia';

interface UEState {
  currentWorkshop: '总装车间' | '喷涂车间' | '终检车间' | '示范工位' | null
}

export const useUEInterfaceStore = defineStore('ueInterface', {
  state: (): UEState => ({
    currentWorkshop: null,
  }),

  actions: {
    setWorkshop(workshop: '总装车间' | '喷涂车间' | '终检车间' | '示范工位') {
      this.currentWorkshop = workshop;
    },
  }
});
