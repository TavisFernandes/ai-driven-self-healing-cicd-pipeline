import { Link } from 'react-router-dom'

export default function ConciergeFab() {
  return (
    <Link
      to="/login"
      className="aurum-concierge fixed bottom-8 right-8 z-[999] flex items-center gap-3
                 rounded-full border border-[#d4af37] bg-[rgba(10,10,10,0.85)] px-7 py-3
                 text-[0.75rem] font-bold uppercase tracking-wider text-[#d4af37]
                 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#d4af37] hover:text-black"
    >
      <span aria-hidden>✨</span>
      Concierge
    </Link>
  )
}
