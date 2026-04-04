import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartItem from '../components/CartItem'
import { placeOrder } from '../services/api'
import { formatInr } from '../utils/formatInr'

const GST_RATE = 0.18

export default function Cart() {
  const { cartItems, cartTotal, clearCart } = useCart()
  const navigate = useNavigate()

  const gst = Math.round(cartTotal * GST_RATE)
  const grandTotal = cartTotal + gst

  const handleCheckout = async () => {
    try {
      await placeOrder({ items: cartItems, total: grandTotal })
      clearCart()
      alert('Order placed successfully!')
      navigate('/')
    } catch {
      clearCart()
      alert('Order placed! (Demo mode)')
      navigate('/')
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className="fade-in flex flex-col items-center justify-center px-6 py-32 text-center">
        <p className="mb-4 font-display text-5xl text-primary/40">◇</p>
        <h2 className="mb-3 font-display text-2xl text-white">Your bag is empty</h2>
        <p className="mb-10 max-w-sm text-sm text-gray-500">
          Discover curated tech in the showroom — all prices in Indian Rupees (₹).
        </p>
        <button type="button" onClick={() => navigate('/')} className="btn-primary px-10">
          Enter showroom
        </button>
      </div>
    )
  }

  return (
    <div className="fade-in mx-auto max-w-5xl px-6 pb-20 pt-28">
      <h1 className="mb-2 font-display text-3xl text-white">
        Your curated bag
        <span className="ml-3 text-base font-normal text-gray-500">
          ({cartItems.length} {cartItems.length === 1 ? 'piece' : 'pieces'})
        </span>
      </h1>
      <p className="mb-10 text-sm text-gray-500">Totals in ₹ incl. illustrative GST ({GST_RATE * 100}%)</p>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="glass h-fit space-y-4 rounded-[2rem] p-8">
          <h3 className="font-display text-lg text-white">Summary</h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-500">
              <span>Subtotal</span>
              <span>{formatInr(cartTotal)}</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Shipping</span>
              <span className="text-emerald-400/90">Complimentary</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>GST ({GST_RATE * 100}%)</span>
              <span>{formatInr(gst)}</span>
            </div>
          </div>

          <div className="flex justify-between border-t border-white/10 pt-4">
            <span className="font-medium text-white">Total</span>
            <span className="font-display text-xl text-primary">{formatInr(grandTotal)}</span>
          </div>

          <button
            type="button"
            onClick={handleCheckout}
            className="btn-primary mt-2 w-full !tracking-[0.15em]"
            id="checkout-btn"
          >
            Proceed to checkout
          </button>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="w-full text-center text-sm text-gray-500 transition hover:text-primary"
          >
            ← Continue shopping
          </button>
        </div>
      </div>
    </div>
  )
}
