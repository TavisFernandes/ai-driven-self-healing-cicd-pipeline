import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative z-10 mt-16 border-t border-white/[0.06] bg-[rgba(5,5,5,0.85)] backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="mb-3 font-display text-2xl font-bold tracking-[0.25em] text-primary">
            AURUM
          </h3>
          <p className="text-sm leading-relaxed text-gray-500">
            Curated tech and accessories — inspired by modern editorial commerce. Case study stack:
            React, Node, Docker, Jenkins &amp; ML-assisted deployment safety.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/80">
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <Link to="/" className="transition hover:text-primary">
                All products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="transition hover:text-primary">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/login" className="transition hover:text-primary">
                Account
              </Link>
            </li>
            <li>
              <Link to="/register" className="transition hover:text-primary">
                Register
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/80">
            Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'Docker', 'Jenkins', 'FastAPI', 'sklearn'].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pb-8 text-center text-xs text-gray-600">
        © 2026 AURUM — APDD Case Study
      </div>
    </footer>
  )
}
