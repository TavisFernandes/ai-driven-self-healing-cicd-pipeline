import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../services/api'

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (form.password !== form.confirm) {
      setError('Passwords do not match.')
      return
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    setLoading(true)
    setError('')
    try {
      const res = await registerUser({ name: form.name, email: form.email, password: form.password })
      localStorage.setItem('token', res.data.token)
      navigate('/')
    } catch {
      // Demo fallback
      localStorage.setItem('token', 'demo-token-123')
      navigate('/')
    } finally {
      setLoading(false)
    }
  }

  const fields = [
    { id: 'reg-name',     name: 'name',     label: 'Full Name',        type: 'text',     placeholder: 'John Doe' },
    { id: 'reg-email',    name: 'email',    label: 'Email',             type: 'email',    placeholder: 'you@example.com' },
    { id: 'reg-password', name: 'password', label: 'Password',          type: 'password', placeholder: '••••••••' },
    { id: 'reg-confirm',  name: 'confirm',  label: 'Confirm Password',  type: 'password', placeholder: '••••••••' },
  ]

  return (
    <div className="fade-in flex min-h-[80vh] items-center justify-center px-4 pb-16 pt-28">
      <div className="glass w-full max-w-md rounded-[2rem] p-8">
        <div className="mb-8 text-center">
          <p className="mb-2 font-display text-xs uppercase tracking-[0.35em] text-primary">AURUM</p>
          <h1 className="font-display text-3xl font-normal text-white">Create account</h1>
          <p className="mt-2 text-sm text-gray-500">Join the showroom</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400
                          text-sm px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map(f => (
            <div key={f.name}>
              <label className="block text-sm text-gray-400 mb-1.5">{f.label}</label>
              <input
                id={f.id}
                name={f.name}
                type={f.type}
                required
                value={form[f.name]}
                onChange={handleChange}
                placeholder={f.placeholder}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3
                           text-white text-sm placeholder-gray-500
                           focus:outline-none focus:border-primary transition"
              />
            </div>
          ))}

          <button
            id="register-submit"
            type="submit"
            disabled={loading}
            className="w-full btn-primary py-3 mt-2 disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  )
}
