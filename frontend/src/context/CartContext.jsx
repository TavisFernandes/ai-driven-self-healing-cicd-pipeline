import { createContext, useContext, useState } from 'react'

// Create the context
const CartContext = createContext()

// Custom hook — lets any component access cart state easily
export const useCart = () => useContext(CartContext)

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  // Add item or increment quantity if already in cart
  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  // Remove item from cart completely
  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId))
  }

  // Update quantity for a specific item
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  // Clear the whole cart (after checkout)
  const clearCart = () => setCartItems([])

  // Total item count shown in the Navbar badge
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  // Total price
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  )

  return (
    <CartContext.Provider value={{
      cartItems, addToCart, removeFromCart, updateQuantity, clearCart,
      cartCount, cartTotal
    }}>
      {children}
    </CartContext.Provider>
  )
}
