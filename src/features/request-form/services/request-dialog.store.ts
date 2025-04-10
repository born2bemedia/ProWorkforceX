import { create } from 'zustand';

export const useRequestDialogStore = create<{
  open: boolean;
  setOpen: (value: boolean) => void;
  sent: boolean;
  setSent: (value: boolean) => void;
}>(set => ({
  open: false,
  setOpen: (value: boolean) => set({ open: value }),
  sent: false,
  setSent: (value: boolean) => set({ sent: value }),
}));
