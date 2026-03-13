import { Link, NavLink } from "react-router-dom"
import { useCartStore } from "../store/cartStore"

export default function Navbar() {

  const items = useCartStore((state:any)=>state.items)
  const cartCount = items.length

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/">Wearistyle</Link>
        </div>

        {/* Menu */}
        <ul className="flex space-x-8 font-medium">
          <li>
            <NavLink
              to="/"
              className={({isActive}) =>
                isActive ? "text-yellow-400" : "hover:text-gray-300"
              }
            >
              Products
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/cart"
              className={({isActive}) =>
                isActive ? "text-yellow-400" : "hover:text-gray-300"
              }
            >
              Cart
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/checkout"
              className={({isActive}) =>
                isActive ? "text-yellow-400" : "hover:text-gray-300"
              }
            >
              Checkout
            </NavLink>
          </li>
        </ul>

        {/* Search + Cart */}
        <div className="flex items-center space-x-6">

          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            className="px-3 py-1 rounded-md text-black"
          />

          {/* Cart */}
          <Link to="/cart" className="relative">

            🛒

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}

          </Link>

        </div>

      </div>

    </nav>
  )
}