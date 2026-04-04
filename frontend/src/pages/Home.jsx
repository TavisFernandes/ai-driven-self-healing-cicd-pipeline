import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../services/api'
import ProductCard from '../components/ProductCard'
import { formatInr, IMG_FALLBACK } from '../utils/formatInr'

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'Wireless Noise-Cancelling Headphones',
    price: 7999,
    originalPrice: 12999,
    discount: 38,
    rating: 5,
    reviews: 2341,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    category: 'Electronics',
  },
  {
    id: 2,
    name: 'Mechanical Gaming Keyboard RGB',
    price: 5499,
    originalPrice: 8999,
    discount: 39,
    rating: 4,
    reviews: 1876,
    image:
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80',
    category: 'Electronics',
  },
  {
    id: 3,
    name: 'Smart Watch Fitness Tracker',
    price: 5999,
    originalPrice: 9999,
    discount: 40,
    rating: 4,
    reviews: 987,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    category: 'Wearables',
  },
  {
    id: 4,
    name: 'Portable Bluetooth Speaker',
    price: 3999,
    originalPrice: 6999,
    discount: 43,
    rating: 5,
    reviews: 3210,
    image:
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80',
    category: 'Electronics',
  },
  {
    id: 5,
    name: 'USB-C Hub 7-in-1 Adapter',
    price: 2499,
    originalPrice: 4499,
    discount: 44,
    rating: 4,
    reviews: 654,
    image:
      'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=600&q=80',
    category: 'Accessories',
  },
  {
    id: 6,
    name: 'Laptop Stand Adjustable Aluminium',
    price: 3499,
    originalPrice: 5499,
    discount: 36,
    rating: 5,
    reviews: 1123,
    image:
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80',
    category: 'Accessories',
  },
  {
    id: 7,
    name: 'Webcam 4K Ultra HD with Mic',
    price: 8999,
    originalPrice: 13999,
    discount: 36,
    rating: 4,
    reviews: 789,
    image:
      'https://images.unsplash.com/photo-1587826080692-f439cd35b70a?w=600&q=80',
    category: 'Electronics',
  },
  {
    id: 8,
    name: 'Ergonomic Wireless Mouse',
    price: 3999,
    originalPrice: 6499,
    discount: 38,
    rating: 5,
    reviews: 2098,
    image:
      'https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&q=80',
    category: 'Accessories',
  },
]

const CATEGORIES = ['All', 'Electronics', 'Wearables', 'Accessories']

export default function Home() {
  const [products, setProducts] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
      .then((res) => setProducts(res.data))
      .catch(() => setProducts(MOCK_PRODUCTS))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    setFiltered(
      activeCategory === 'All'
        ? products
        : products.filter((p) => p.category === activeCategory)
    )
  }, [activeCategory, products])

  const heroProduct = products[0] || MOCK_PRODUCTS[0]

  return (
    <div className="fade-in">
      <section className="relative px-6 pb-16 pt-36 md:pt-44">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-primary/80">
            All tech. One atelier.
          </p>
          <h1 className="font-display text-4xl font-extralight leading-[1.05] tracking-tight text-white md:text-6xl md:leading-none">
            Elegance is an{' '}
            <span className="gold-gradient-text font-display italic">art form.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-gray-500 md:text-base">
            Step into a curated gadget universe — crisp imagery, India pricing in rupees, and the same
            cart &amp; checkout flow as before. Inspired by editorial storefronts like{' '}
            <a
              href="https://marvelous-league-629341-c759dd393.framer.app/"
              className="text-primary/90 underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Altech
            </a>
            , refined for AURUM.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() =>
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="btn-primary px-10"
            >
              Enter showroom
            </button>
            <Link to="/cart" className="btn-outline px-8 text-xs uppercase tracking-widest">
              Your bag
            </Link>
          </div>
        </div>

        {heroProduct && (
          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-12">
            <div className="glass card-hover flex min-h-[280px] flex-col justify-between rounded-[2rem] p-8 md:col-span-8">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-primary">Featured</p>
                <h2 className="mt-2 font-display text-2xl text-white md:text-3xl">{heroProduct.name}</h2>
                <p className="mt-3 max-w-md text-sm text-gray-500">
                  Premium pick from today&apos;s collection. Real product photos via Unsplash — no broken
                  placeholders.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="text-2xl font-light text-primary">{formatInr(heroProduct.price)}</span>
                {heroProduct.originalPrice != null && (
                  <span className="text-sm text-gray-600 line-through">
                    {formatInr(heroProduct.originalPrice)}
                  </span>
                )}
                <Link to={`/product/${heroProduct.id}`} className="btn-primary !text-[10px]">
                  View details
                </Link>
              </div>
            </div>
            <div className="glass relative overflow-hidden rounded-[2rem] md:col-span-4">
              <img
                src={heroProduct.image || IMG_FALLBACK}
                alt=""
                className="h-64 w-full object-cover md:h-full md:min-h-[280px]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-4">
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-black'
                  : 'border border-white/10 bg-white/[0.03] text-gray-400 hover:border-primary/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-2 font-display text-2xl text-white md:text-3xl">
          {activeCategory === 'All' ? 'Curated acquisitions' : activeCategory}
        </h2>
        <p className="mb-8 text-sm text-gray-500">
          {filtered.length} piece{filtered.length === 1 ? '' : 's'} — prices in{' '}
          <span className="text-primary">₹ INR</span>
        </p>

        {loading ? (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="glass h-80 animate-pulse rounded-[1.75rem]" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
