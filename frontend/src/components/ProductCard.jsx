import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatInr, IMG_FALLBACK } from '../utils/formatInr'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [imgSrc, setImgSrc] = useState(product.image)

  const stars =
    '★'.repeat(Math.round(product.rating || 4)) +
    '☆'.repeat(5 - Math.round(product.rating || 4))

  return (
    <div className="glass card-hover group cursor-pointer overflow-hidden rounded-[1.75rem] p-0">
      <Link to={`/product/${product.id}`}>
        <div className="relative flex h-56 items-center justify-center overflow-hidden bg-black/40">
          <img
            src={imgSrc}
            alt={product.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgSrc(IMG_FALLBACK)}
            className="h-full w-full object-cover p-0 transition-transform duration-500 group-hover:scale-105"
          />
          {product.discount ? (
            <span className="absolute left-3 top-3 rounded-full border border-primary/40 bg-black/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur-sm">
              −{product.discount}%
            </span>
          ) : null}
        </div>
      </Link>

      <div className="space-y-2 p-5">
        <Link to={`/product/${product.id}`}>
          <h3 className="line-clamp-2 text-sm font-medium leading-snug text-white transition hover:text-primary">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-xs text-primary">{stars}</span>
          <span className="text-xs text-gray-500">({product.reviews ?? 0})</span>
        </div>

        <div className="flex items-end justify-between pt-1">
          <div>
            <span className="text-lg font-semibold text-primary">{formatInr(product.price)}</span>
            {product.originalPrice != null && (
              <span className="ml-2 text-xs text-gray-500 line-through">
                {formatInr(product.originalPrice)}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="rounded-full border border-primary/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-primary transition hover:bg-primary hover:text-black"
            id={`add-to-cart-${product.id}`}
          >
            + Cart
          </button>
        </div>
      </div>
    </div>
  )
}
