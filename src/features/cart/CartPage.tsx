import { useCartStore } from "../../store/cartStore"
import { useMemo, useRef, useEffect } from "react"

type CartItem = {
  id: number
  name: string
  price: number
}

type CartState = {
  items: CartItem[]
}

export default function CartPage() {

  const items = useCartStore((state: CartState) => state.items)

  const prevCount = useRef<number>(0)

  useEffect(() => {
    console.log("Previous cart items:", prevCount.current)
    prevCount.current = items.length
  }, [items])

  return (
    <div>
      {items.map((item: CartItem) => (
        <div key={item.id}>
          {item.name} - {item.price}
        </div>
      ))}

      <CartTotal />
    </div>
  )
}

function CartTotal() {
  const items = useCartStore((state: CartState) => state.items)

  const total = useMemo(() => {
    console.log("Calculating total")
    return items.reduce((sum, item) => sum + item.price, 0)
  }, [items])

  return <div>Total: ${total}</div>
}