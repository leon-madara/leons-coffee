// src/components/NavBar.tsx
import React, { useState, useEffect } from 'react'
import { FiCoffee, FiShoppingCart, FiSearch, FiMenu, FiX } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import styles from './NavBar.module.css'
import floatingLogo from '../../images/favIcon.png'
import { useCart } from '../../contexts/CartContext'

export const NavBar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()
    const { cartItems } = useCart()

    // Close menu when route changes
    useEffect(() => {
        const unlisten = () => setIsMenuOpen(false)
        return unlisten
    }, [])

    // Calculate total items in cart
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    useEffect(() => {
        // Handle scroll for navbar effect
        const handleScroll = () => {
            const shouldBeFloating = window.scrollY > 10
            if (shouldBeFloating !== isScrolled) {
                setIsScrolled(shouldBeFloating)
            }
        }

        // Handle window resize for responsive design
        const handleResize = () => {
            // Close menu when resizing to desktop
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false)
            }
        }

        // Set initial mobile state
        handleResize()

        // Add event listeners
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }
    }, [isScrolled])

    const navigateToCart = () => {
        navigate('/cart')
        setIsMenuOpen(false) // Close menu when navigating to cart
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <React.Fragment>
            {/* Overlay when mobile menu is open */}
            {isMenuOpen && (
                <div
                    className={styles.navOverlay}
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            <nav
                className={`${styles.navbar} ${isScrolled ? styles.floatingNav : ''} ${isMenuOpen ? styles.menuOpen : ''}`}
                role="navigation"
                aria-label="Main navigation"
            >
                {/* Left Group - Logo */}
                <div className={styles.navLogo}>
                    <Link to="/" onClick={closeMenu}>
                        {isScrolled ? (
                            <img src={floatingLogo} alt="Coffee Shop Logo" className={styles.logoImg} />
                        ) : (
                            <FiCoffee className={styles.coffeeIcon} aria-label="coffee icon" />
                        )}
                    </Link>
                </div>

                {/* Hamburger Menu Button - Only visible on mobile */}
                <button
                    className={styles.hamburger}
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                    aria-controls="main-navigation"
                >
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* Navigation Links */}
                <div
                    id="main-navigation"
                    className={`${styles.navCenter} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
                    role="navigation"
                    aria-label="Main navigation"
                >
                    <Link to="/" onClick={closeMenu}>Home</Link>
                    <Link to="/history" onClick={closeMenu}>Our History</Link>
                    <Link to="/menu" onClick={closeMenu}>Menu</Link>
                    <Link to="/events" onClick={closeMenu}>Events</Link>
                    <Link to="/locations" onClick={closeMenu}>Locations</Link>
                    <Link to="/customers" onClick={closeMenu}>Customers</Link>
                    <Link to="/contactus" onClick={closeMenu}>Contact Us</Link>

                    {/* Mobile-only cart and search */}
                    <div className={styles.mobileIcons}>
                        <div className={styles.cartIcon} onClick={navigateToCart}>
                            <FiShoppingCart aria-label="cart icon" />
                            {cartItemCount > 0 && (
                                <span className={styles.cartBadge}>{cartItemCount}</span>
                            )}
                        </div>
                        <FiSearch className={styles.icon} aria-label="search icon" />
                    </div>
                </div>

                {/* Right Group - Action Icons - Desktop only */}
                <div className={styles.navRight}>
                    <div className={styles.cartContainer}>
                        <FiShoppingCart
                            className={styles.icon}
                            aria-label="cart icon"
                            onClick={navigateToCart}
                        />
                        {cartItemCount > 0 && (
                            <span className={styles.cartBadge}>
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
