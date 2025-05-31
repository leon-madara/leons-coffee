// src/components/NavBar.tsx
import React, { useState, useEffect } from 'react'
import { FiCoffee, FiShoppingCart, FiSearch } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import styles from './NavBar.module.css'
import floatingLogo from '../../images/favIcon.png'
import { useCart } from '../../contexts/CartContext'

export const NavBar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const isVisible = true
    const navigate = useNavigate();
    const { cartItems } = useCart();
    
    // Calculate total items in cart
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    useEffect(() => {
        // Create our scroll observer
        const handleScroll = () => {
            // Check if we've scrolled past the threshold
            const shouldBeFloating = window.scrollY > 10

            // Only update state if there's a change to avoid unnecessary renders
            if (shouldBeFloating !== isScrolled) {
                setIsScrolled(shouldBeFloating)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isScrolled]) // Include isScrolled in the dependency array

    const navigateToCart = () => {
        navigate('/cart')
    }

    return (
        <React.Fragment>
            <nav
                className={`${styles.navbar} ${isScrolled ? styles.floatingNav : ''}`}
                style={{
                    opacity: isVisible ? 1 : 0,
                    transition: 'all 0.5s ease',
                    transitionProperty: 'width, top, left, transform, background-color, box-shadow, border-radius, opacity',
                    transitionDuration: '0.5s',
                    transitionTimingFunction: 'ease'
                }}
            >
                {/* Left Group - Logo */}
                <div className={styles.navLogo}>
                    {isScrolled ? (
                        <img src={floatingLogo} alt="Coffee Shop Logo" className={styles.logoImg} />
                    ) : (
                        <FiCoffee className={styles.coffeeIcon} aria-label="coffee icon" />
                    )}
                </div>

                {/* Center Group - Navigation Links */}
                <div className={styles.navCenter}>
                    <Link to="/">Home</Link>
                    <Link to="/history">Our History</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/locations">Locations</Link>
                    <Link to="/customers">Customers</Link>
                    <Link to="/contactus">Contact Us</Link>
                </div>

                {/* Right Group - Action Icons */}
                <div className={styles.navRight}>
                    <div style={{ position: 'relative' }}>
                        <FiShoppingCart 
                            className={styles.icon} 
                            aria-label="cart icon"
                            onClick={navigateToCart}
                            style={{ cursor: 'pointer' }}
                        />
                        {cartItemCount > 0 && (
                            <span 
                                style={{
                                    position: 'absolute',
                                    top: '-8px',
                                    right: '-8px',
                                    background: '#D98D50',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '20px',
                                    height: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}
                            >
                                {cartItemCount}
                            </span>
                        )}
                    </div>
                    <FiSearch className={styles.icon} aria-label="search icon" />
                </div>
            </nav>

        </React.Fragment>
    )
}
