import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  changeIsOpenModal: (open: boolean) => void;
}

export const modalStore = create<ModalState>()((set) => ({
  isOpen: false,
  changeIsOpenModal: (open) => set({ isOpen: open }),
}));
