import { create } from 'zustand';

import type { ProductDef } from '@/features/product/lib';

export const useOrderDialogStore = create<{
  open: boolean;
  setOpen: (value: boolean) => void;
  sent: boolean;
  setSent: (value: boolean) => void;
  product: ProductDef | undefined;
  setProduct: (product: ProductDef | undefined) => void;
}>(set => ({
  open: false,
  setOpen: (value: boolean) => set({ open: value }),
  sent: false,
  setSent: (value: boolean) => set({ sent: value }),
  product: undefined,
  setProduct: (product: ProductDef | undefined) => set({ product }),
}));
