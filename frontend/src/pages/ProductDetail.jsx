import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchProductById } from '../services/api'
import { useCart } from '../context/CartContext'
import { formatInr, IMG_FALLBACK } from '../utils/formatInr'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [added, setAdded] = useState(false)
  const [imgSrc, setImgSrc] = useState('')

  useEffect(() => {
    fetchProductById(id)
      .then((res) => {
        setProduct(res.data)
        setImgSrc(res.data.image)
      })
      .catch(() => {
        setProduct({
          id: Number(id),
          name: 'AURUM Signature Device',
          price: 5999,
          originalPrice: 8999,
          discount: 33,
          rating: 4,
          reviews: 512,
          image: IMG_FALLBACK,
          description:
            'Premium device placeholder — start the backend to load the full catalogue with Unsplash imagery.',
          category: 'Electronics',
        })
        setImgSrc(IMG_FALLBACK)
      })
  }, [id])

  const handleAddToCart = () => {
    if (!product) return
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  if (!product) {
    return (
      <div className="flex h-64 items-center justify-center pt-24">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    )
  }

  const stars =
    '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating))

  return (
    <div className="fade-in mx-auto max-w-5xl px-6 pb-16 pt-28">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-8 flex items-center gap-2 text-sm text-gray-500 transition hover:text-primary"
      >
        ← Back to showroom
      </button>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="glass flex items-center justify-center overflow-hidden rounded-[2rem] p-4">
          <img
            src={imgSrc}
            alt={product.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgSrc(IMG_FALLBACK)}
            className="max-h-96 w-full object-contain"
          />
        </div>

        <div className="space-y-5">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
            {product.category}
          </span>

          <h1 className="font-display text-3xl font-normal leading-tight text-white md:text-4xl">
            {product.name}
          </h1>

          <div className="flex items-center gap-3">
            <span className="text-primary">{stars}</span>
            <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
          </div>

          <div className="flex flex-wrap items-end gap-3">
            <span className="font-display text-4xl text-primary">{formatInr(product.price)}</span>
            {product.originalPrice != null && (
              <>
                <span className="text-lg text-gray-600 line-through">
                  {formatInr(product.originalPrice)}
                </span>
                <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-xs text-emerald-400">
                  Save {product.discount}%
                </span>
              </>
            )}
          </div>

          <p className="text-sm leading-relaxed text-gray-500">{product.description}</p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <button
              type="button"
              onClick={handleAddToCart}
              className={`flex-1 rounded-full py-3.5 text-xs font-bold uppercase tracking-[0.2em] transition ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'btn-primary !w-full border-primary text-center'
              }`}
            >
              {added ? 'Added to bag' : 'Add to bag'}
            </button>
            <button
              type="button"
              onClick={() => {
                addToCart(product)
                navigate('/cart')
              }}
              className="flex-1 rounded-full border border-primary/50 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-primary transition hover:bg-primary/10"
            >
              Buy now
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-4">
            {[
              ['🚚', 'Pan-India shipping'],
              ['🔄', 'Easy returns'],
              ['🔒', 'Secure checkout'],
            ].map(([icon, label]) => (
              <div
                key={label}
                className="glass rounded-xl p-3 text-center text-[10px] uppercase tracking-wider text-gray-500"
              >
                <div className="mb-1 text-lg">{icon}</div>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
