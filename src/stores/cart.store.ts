import { create } from "zustand";

interface CartState {
  cart: any[];
  product: any;
  openModal: boolean;
  setOpenModal: () => void;
  setProduct: (params: { newProduct: any }) => void;
  addItem: (params: { newItem: any }) => void;
  removeItem: (params: { itemIndex: number }) => void;
  emptyCart: () => void;
}

const useCart = create<CartState>((set, get) => {
  // Check if there are smthg in storage
  const storedState = localStorage.getItem("cartState");
  const initialState: CartState = storedState ? JSON.parse(storedState) : { cart: [], product: {}, openModal: false };

  return {
    ...initialState,
    setOpenModal: () => {
      set((state) => {
        const newState: CartState = {
          ...state,
          openModal: !state.openModal,
        };

        // saving
        localStorage.setItem("cartState", JSON.stringify(newState));

        return newState;
      });
    },
    setProduct: (params) => {
      const { newProduct } = params;
      set((state) => {
        const newState: CartState = {
          ...state,
          product: newProduct,
        };

        localStorage.setItem("cartState", JSON.stringify(newState));

        return newState;
      });
    },
    addItem: (params) => {
      const { newItem } = params;
      set((state) => {
        const newCart = [...state.cart, newItem];
        const newState: CartState = {
          ...state,
          cart: newCart,
        };

        localStorage.setItem("cartState", JSON.stringify(newState));

        return newState;
      });
    },
    removeItem: (params) => {
      const { itemIndex } = params;
      set((state) => {
        const newCart = state.cart.filter((_, eIndex) => eIndex !== itemIndex);
        const newState: CartState = {
          ...state,
          cart: newCart,
        };

        localStorage.setItem("cartState", JSON.stringify(newState));

        return newState;
      });
    },
    emptyCart: () => {
      set((state) => {
        const newCart: never[] = [];
        const newState: CartState = {
          ...state,
          cart: newCart,
        };

        localStorage.setItem("cartState", JSON.stringify(newState));

        return newState;
      });
    },
  };
});

export default useCart;
