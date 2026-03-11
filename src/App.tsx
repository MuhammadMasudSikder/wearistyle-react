
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import ProductListPage from "./features/products/ProductListPage"
import ProductDetailsPage from "./features/products/ProductDetailsPage"
import CartPage from "./features/cart/CartPage"
import CheckoutPage from "./features/checkout/CheckoutPage"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App