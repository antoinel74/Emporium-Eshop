import { create } from "zustand";

const useCart = create((set, get) => ({
  cart: [],
  product: {},
  openModal: false,
  setOpenModal: () => {
    set((state?: any) => {
      return {
        ...state,
        openModal: !state.openModal,
      };
    });
  },
  setProduct: (params?: any) => {
    const { newProduct } = params;
    set((state?: any) => {
      return {
        ...state,
        product: newProduct,
      };
    });
  },
  addItem: (params?: any) => {
    const { newItem } = params;
    set((state?: any) => {
      const newCart = [...state.cart, newItem];
      return {
        ...state,
        cart: newCart,
      };
    });
  },
  removeItem: (params?: any) => {
    const { itemIndex } = params;
    set((state?: any) => {
      const newCart = state.cart.filter((e?: any, eIndex?: any) => {
        return eIndex !== itemIndex;
      });
      return {
        ...state,
        cart: newCart,
      };
    });
  },
  emptyCart: () => {
    set((state?: any) => {
      const newCart: never[] = [];
      return {
        ...state,
        cart: newCart,
      };
    });
  },
}));

export default useCart;
