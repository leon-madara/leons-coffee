import React from 'react';
import styles from './Customers.module.css';

// Import avatar images
import sarahAvatar from '../../images/CustomerStories/SarahJohnson.png';
import michaelAvatar from '../../images/CustomerStories/MichaelChen.png';
import emmaAvatar from '../../images/CustomerStories/EmmaWilson.png';

const Customers: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Customer Stories Section */}
      <h1 className={styles.sectionTitle}>Customer Stories</h1>
      <h2 className={styles.subsectionTitle}>Testimonials</h2>

      <div className={styles.testimonialContainer}>
        {/* Testimonial 1 */}
        <div className={styles.testimonialCard}>
          <img
            src={sarahAvatar}
            alt="Sarah Johnson"
            className={styles.avatar}
          />
          <h3 className={styles.customerName}>
            Sarah Johnson
            <span className={styles.customerTitle}>Coffee Enthusiast</span>
          </h3>
          <p className={styles.testimonialText}>
            "Leon's Coffee has completely changed my morning routine. Their Arabica blend is the perfect balance of flavor and smoothness."
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className={styles.testimonialCard}>
          <img
            src={michaelAvatar}
            alt="Michael Chen"
            className={styles.avatar}
          />
          <h3 className={styles.customerName}>
            Michael Chen
            <span className={styles.customerTitle}>Local Business Owner</span>
          </h3>
          <p className={styles.testimonialText}>
            "We've been ordering Leon's Coffee beans for our office for years. The quality and consistency keep our team happy and productive."
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className={styles.testimonialCard}>
          <img
            src={emmaAvatar}
            alt="Emma Wilson"
            className={styles.avatar}
          />
          <h3 className={styles.customerName}>
            Emma Wilson
            <span className={styles.customerTitle}>Food Blogger</span>
          </h3>
          <p className={styles.testimonialText}>
            "As someone who reviews coffee shops professionally, I can say that Leon's stands out for both their exceptional beans and welcoming atmosphere."
          </p>
        </div>
      </div>

      {/* Loyalty Program Section */}
      <h2 className={styles.subsectionTitle}>Loyalty Program</h2>

      <div className={styles.loyaltyCard}>
        <h3 className={styles.loyaltyTitle}>Join Leon's Club</h3>
        <p className={styles.loyaltyText}>
          Sign up for our loyalty program and enjoy these exclusive benefits:
        </p>

        <ul className={styles.benefitsList}>
          <li>Earn points with every purchase</li>
          <li>Get a free drink on your birthday</li>
          <li>Exclusive access to limited edition beans</li>
          <li>Early access to events and workshops</li>
        </ul>

        <button className={styles.joinButton}>Join Now</button>
      </div>
    </div>
  );
};

export default Customers;