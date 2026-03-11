
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <div className="text-lg font-bold">
        <Link to="/">Wearistyle</Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "text-yellow-400" : ""}
          >
            Products
        </NavLink>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
    </nav>
  )
}