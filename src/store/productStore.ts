import { create } from "zustand"

type Product = {
  id: number
  name: string
  price: number
}

type ProductStore = {
  products: Product[]
  setProducts: (products: Product[]) => void
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],   // important initialization
  setProducts: (products) => set({ products })
}))