import { useParams } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import { getProduct } from "../../services/productService"
import axiosClient  from "../../api/axiosClient"

interface Product {
  id: number
  name: string
  description: string
  price: number
  imagePath: string
}

export default function ProductDetailsPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const topRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (id) {
      getProduct(Number(id)).then(setProduct)
    }
  }, [id])

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  if (!product) return <div>Loading...</div>

  const imageUrl = `${axiosClient.defaults.baseURL}${product.imagePath}`

  return (
    <div ref={topRef}>
      <img src={imageUrl} alt={product.name} />

      <h1>{product.name}</h1>

      <p>{product.description}</p>

      <p>${product.price}</p>
    </div>
  )
}