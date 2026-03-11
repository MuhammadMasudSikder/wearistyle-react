import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../features/products/ProductListPage"
import CartPage from "../features/cart/CartPage"
import ProductDetailsPage from "../features/products/ProductDetailsPage"

export default function Router(){

 return(
  <BrowserRouter>
   <Routes>

    <Route path="/" element={<HomePage/>} />
    <Route path="/cart" element={<CartPage/>} />
    <Route path="/product/:id" element={<ProductDetailsPage/>} />

   </Routes>
  </BrowserRouter>
 )
}