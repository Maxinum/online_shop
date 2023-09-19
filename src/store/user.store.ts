import { create } from "zustand";

interface StoreState {
  cart: {
    id: number;
    qty: number;
  }[];
  setCart: (id: number, qty: number) => void;
  updateCart: (id: number, qty: number) => void;
  removeFromCart: (id: number) => void;
}

const useUserStore = create<StoreState>((set) => ({
  cart: [],
  setCart: (id, qty) => {
    set((state) => {
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex((item) => item.id === id);

      if (index !== -1) {
        updatedCart[index].qty += qty;
      } else {
        updatedCart.push({ id, qty });
      }

      return { cart: updatedCart };
    });
  },
  updateCart: (id, qty) => {
    set((state) => {
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex((item) => item.id === id);

      if (index !== -1) {
        updatedCart[index].qty = qty;
      }

      return { cart: updatedCart };
    });
  },
  removeFromCart: (id) => {
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      return { cart: updatedCart };
    });
  },
}));

export default useUserStore;
