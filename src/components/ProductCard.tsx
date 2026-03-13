import { useCallback } from "react"
import { useCartStore } from "../store/cartStore"
import axiosClient  from "../api/axiosClient"

interface Product {
  id: number
  name: string
  price: number
  imagePath: string
}

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const addToCart = useCartStore((state: any) => state.addToCart)

  const handleAdd = useCallback(() => {
    addToCart(product)
  }, [addToCart, product])

  return (
    <div className="border p-4">
      <img src={`${axiosClient.defaults.baseURL}${product.imagePath}`} alt={product.name} />

      <h2>{product.name}</h2>

      <p>${product.price}</p>

      <button onClick={handleAdd}>Add to Cart</button>

    </div>
    
  )
}