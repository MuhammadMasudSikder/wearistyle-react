import { create } from "zustand"

interface CartState {

  items: any[];

  addToCart: (item:any) => void;

  removeFromCart: (id:number) => void;

}

export const useCartStore = create<CartState>((set) => ({

  items: [],

  addToCart: (item) =>
    set((state) => ({
      items: [...state.items, item]
    })),

  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter(x => x.id !== id)
    }))

}));