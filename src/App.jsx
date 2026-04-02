import { useState } from 'react'
import './App.css'

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const categories = [
    {
      id: 1,
      name: 'Bass Lures',
      description: 'Proven bass fishing lures with realistic action',
      image: 'https://images.unsplash.com/photo-1564623394527-f6b0fbb0ff28?w=400&q=80',
      type: 'Bass',
    },
    {
      id: 2,
      name: 'Trout Selection',
      description: 'Lightweight lures perfect for trout streams',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80',
      type: 'Trout',
    },
    {
      id: 3,
      name: 'Saltwater Pro',
      description: 'Heavy-duty lures for saltwater fishing',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      type: 'Saltwater',
    },
    {
      id: 4,
      name: 'Freshwater Favorites',
      description: 'Versatile lures for all freshwater species',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
      type: 'Freshwater',
    },
  ]

  const products = [
    { id: 1, name: 'Spinner Lure', price: 12.99, category: 'Bass', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&q=80' },
    { id: 2, name: 'Crank Bait', price: 14.99, category: 'Bass', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&q=80' },
    { id: 3, name: 'Soft Plastic', price: 8.99, category: 'Trout', image: 'https://images.unsplash.com/photo-1577720643272-265e434ff1df?w=300&q=80' },
    { id: 4, name: 'Jig Head', price: 9.99, category: 'Trout', image: 'https://images.unsplash.com/photo-1517457373614-b7152f5fc3a1?w=300&q=80' },
    { id: 5, name: 'Metal Spoon', price: 16.99, category: 'Saltwater', image: 'https://images.unsplash.com/photo-1551505348-5b96fcd82f3e?w=300&q=80' },
    { id: 6, name: 'Topwater Plug', price: 18.99, category: 'Saltwater', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80' },
    { id: 7, name: 'Tube Lure', price: 10.99, category: 'Freshwater', image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&q=80' },
    { id: 8, name: 'Rubber Worm', price: 7.99, category: 'Freshwater', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80' },
  ]

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index))
  }

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)

  return (
    <>
      {/* Navigation */}
      <nav>
        <h1>🎣 Bait Hub</h1>
        <div className="nav-right">
          <span>Premium Fishing Lures</span>
          <div className="cart-icon" onClick={() => setCartOpen(!cartOpen)}>
            🛒 {cartItems.length}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Cast Your Line with Confidence</h2>
          <p>Premium hand-crafted fishing lures designed for every water and species</p>
          <button className="cta-button" onClick={() => document.querySelector('.categories-section').scrollIntoView({ behavior: 'smooth' })}>
            Explore Categories
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Shop by Category</h2>
        <div className="bento-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <img src={category.image} alt={category.name} className="category-image" />
              <div className="category-info">
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
                <button className="category-button">Shop {category.type}</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h4>{product.name}</h4>
                <p className="product-price">${product.price}</p>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Sidebar */}
      <div className={`overlay ${cartOpen ? 'open' : ''}`} onClick={() => setCartOpen(false)}></div>
      <div className={`cart-sidebar ${cartOpen ? 'open' : ''}`}>...
      <= Additional code omitted for brevity => 
      {/* Footer */}
      <footer>
        <p>&copy; 2026 Bait Hub. All rights reserved. Cast with confidence.</p>
      </footer>
    </>
  )
}