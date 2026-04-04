import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import AurumCanvas from './components/AurumCanvas'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ConciergeFab from './components/ConciergeFab'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <CartProvider>
      <Router>
        <AurumCanvas />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <Footer />
          <ConciergeFab />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
