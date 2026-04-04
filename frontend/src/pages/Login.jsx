import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../services/api'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await loginUser(form)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      navigate('/')
    } catch {
      // Demo fallback: any login works
      localStorage.setItem('token', 'demo-token-123')
      localStorage.setItem('user', JSON.stringify({ name: 'Demo User', email: form.email }))
      navigate('/')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fade-in flex min-h-[80vh] items-center justify-center px-4 pb-16 pt-28">
      <div className="glass w-full max-w-md rounded-[2rem] p-8">
        <div className="mb-8 text-center">
          <p className="mb-2 font-display text-xs uppercase tracking-[0.35em] text-primary">AURUM</p>
          <h1 className="font-display text-3xl font-normal text-white">Welcome back</h1>
          <p className="mt-2 text-sm text-gray-500">Sign in to your account</p>
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400
                          text-sm px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Email</label>
            <input
              id="login-email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                         text-white text-sm placeholder-gray-500
                         focus:outline-none focus:border-primary transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1.5">Password</label>
            <input
              id="login-password"
              name="password"
              type="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                         text-white text-sm placeholder-gray-500
                         focus:outline-none focus:border-primary transition"
            />
          </div>

          <button
            id="login-submit"
            type="submit"
            disabled={loading}
            className="w-full btn-primary py-3 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary hover:underline">Register</Link>
        </p>

        {/* Demo hint */}
        <p className="text-center text-gray-600 text-xs mt-4">
          Demo: any email & password works
        </p>
      </div>
    </div>
  )
}
