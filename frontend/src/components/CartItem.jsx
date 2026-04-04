import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { formatInr, IMG_FALLBACK } from '../utils/formatInr'

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart()
  const [imgSrc, setImgSrc] = useState(item.image)

  const lineTotal = item.price * item.quantity

  return (
    <div className="glass card-hover flex flex-wrap items-center gap-4 rounded-2xl p-4 md:flex-nowrap">
      <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-black/40">
        <img
          src={imgSrc}
          alt={item.name}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setImgSrc(IMG_FALLBACK)}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-sm font-medium text-white">{item.name}</h4>
        <p className="mt-1 text-sm font-semibold text-primary">{formatInr(item.price)}</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-primary hover:text-black"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="w-6 text-center font-semibold text-white">{item.quantity}</span>
        <button
          type="button"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-primary hover:text-black"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <div className="w-full text-right md:w-28">
        <p className="font-semibold text-white">{formatInr(lineTotal)}</p>
        <button
          type="button"
          onClick={() => removeFromCart(item.id)}
          className="mt-1 text-xs text-red-400/90 transition hover:text-red-300"
        >
          Remove
        </button>
      </div>
    </div>
  )
}
