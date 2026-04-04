import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { cartCount } = useCart()
  const navigate = useNavigate()
  const isLoggedIn = !!localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-[1000] flex justify-center px-4 pt-8">
      <nav
        className="pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-white/[0.08] bg-[rgba(10,10,10,0.65)] px-6 py-3 backdrop-blur-xl md:px-10"
        style={{ transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)' }}
      >
        <Link
          to="/"
          className="font-display text-xl font-bold tracking-[0.35em] text-primary md:text-2xl gold-gradient-text"
        >
          AURUM
        </Link>

        <div className="hidden max-w-xs flex-1 md:block md:mx-6">
          <input
            type="search"
            placeholder="Search gadgets, devices…"
            className="w-full rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
            aria-label="Search products"
          />
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Link
            to="/"
            className="hidden text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/40 transition hover:text-primary sm:inline"
          >
            Shop
          </Link>
          {isLoggedIn ? (
            <button
              type="button"
              onClick={handleLogout}
              className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/50 transition hover:text-primary"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/50 transition hover:text-primary"
            >
              Sign In
            </Link>
          )}
          <Link
            to="/cart"
            className="flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-wider text-primary transition hover:bg-primary hover:text-black"
          >
            Cart
            {cartCount > 0 && (
              <span className="flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-black/80 px-1 text-[10px] text-primary">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  )
}
