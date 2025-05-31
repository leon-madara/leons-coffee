// Cart.tsx
import React from 'react';
import styles from './Cart.module.css';
import { useCart } from '../../contexts/CartContext'; // Assuming this exists

const Cart: React.FC = () => {
  const {
    cartItems,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart
  } = useCart();

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = parseFloat((subtotal * 0.08).toFixed(2)); // 8% tax rate
  const total = subtotal + tax;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.cartHeader}>
        <h1 className={styles.title}>Your Cart</h1>
        {cartItems.length > 0 && (
          <button
            className={styles.clearButton}
            onClick={clearCart}
            style={{
              background: '#D98D50',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          >
            Clear All
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <p>Your cart is empty. Add some delicious coffee to get started!</p>
        </div>
      ) : (
        <div className={styles.cartLayout}>
          <div className={styles.productsContainer}>
            <table className={styles.productsTable}>
              <thead>
                <tr>
                  <th className={styles.productColumn}>Product</th>
                  <th className={styles.quantityColumn}>Quantity</th>
                  <th className={styles.priceColumn}>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id} className={styles.productRow}>
                    <td className={styles.productInfo}>
                      <div className={styles.productName}>{item.name}</div>
                      <button
                        className={styles.removeButton}
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                    <td className={styles.quantityControls}>
                      <button
                        className={styles.quantityButton}
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className={styles.quantityValue}>{item.quantity}</span>
                      <button
                        className={styles.quantityButton}
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </td>
                    <td className={styles.productPrice}>${item.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.orderSummary}>
            <h2 className={styles.summaryTitle}>Order Summary</h2>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.totalRow}`}>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className={styles.checkoutButton}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;


