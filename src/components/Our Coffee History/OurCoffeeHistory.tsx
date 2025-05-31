// src/pages/HistoryPage.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './OurCoffeeHistory.module.css';
import historyData from './historyData.json';

// Import all history images
import history1 from '../../images/History/history1.png';
import history1BG from '../../images/History/history1-!BG.png';
import history2 from '../../images/History/history2.png';
import history2BG from '../../images/History/history2-!BG.png';
import history3 from '../../images/History/history3.png';
import history3BG from '../../images/History/history3-!BG.png';
import history4 from '../../images/History/history4.png';
import history4BG from '../../images/History/history4-!BG.png';
import history5 from '../../images/History/history5.png';
import history5BG from '../../images/History/history5-!BG.png';
import backgroundImage from '../../images/coffee_now_2025.jpg';

// Create a mapping object for easy image access with type safety
const historyImages: Record<string, string> = {
  'history1.png': history1,
  'history1-!BG.png': history1BG,
  'history2.png': history2,
  'history2-!BG.png': history2BG,
  'history3.png': history3,
  'history3-!BG.png': history3BG,
  'history4.png': history4,
  'history4-!BG.png': history4BG,
  'history5.png': history5,
  'history5-!BG.png': history5BG,
};

// We now use the directly imported backgroundImage instead of a path

const OurCoffeeHistory: React.FC = () => {
  const [activeScene, setActiveScene] = useState(0);
  const [hoveringImage, setHoveringImage] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles['history-page']}>
      {/* Header Section */}
      <section className={styles['history-header']}>
        <motion.h1
          className={styles['history-title']}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our History
        </motion.h1>
        <motion.p
          className={styles['history-subtitle']}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Hover your mouse over the image to explore the journey of Leon's Coffee.
        </motion.p>
      </section>

      {/* Coffee Journey Section */}
      <section className={styles['coffee-journey']}>
        {/* History Summary */}
        <div className={styles['history-summary']}>
          <p>
            <strong>{historyData.summary.title}</strong>
            {historyData.summary.description}
          </p>
        </div>
        
        {/* Image Gallery Container */}
        <div className={styles['gallery-container']}>
          {/* Blurred Background Rectangle */}
          <div 
            className={styles['background-rectangle']}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          
          {/* Stacked Images */}
          <div className={styles['image-stack']}>
            {historyData.scenes.map((scene, index) => (
              <div
                key={scene.id}
                className={`${styles['stack-image']} ${styles[`stack-${index + 1}`]}`}
                onMouseEnter={() => {
                  setActiveScene(index);
                  setHoveringImage(true);
                }}
                onMouseLeave={() => setHoveringImage(false)}
              >
                <img
                  src={historyImages[scene.thumbnail]}
                  alt={scene.alt}
                  className={styles['thumbnail-img']}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Scene Details */}
        <div className={styles['hover-details']}>
          {historyData.scenes.map((scene, index) => (
            <div
              key={scene.id}
              className={`${styles['scene-detail']} ${index === activeScene ? styles['active'] : ''}`}
            >
              <div className={styles['detail-content']}>
                <img
                  src={historyImages[scene.image]}
                  alt={scene.alt}
                  className={`${styles['detail-image']} ${hoveringImage ? styles['glowing'] : ''}`}
                />
                <div className={styles['detail-text']}>
                  <h3>{scene.title}</h3>
                  <p>{scene.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Values Section */}
      <section className={styles['quality-values']}>
        <h2 className={styles['section-title']}>Our Commitment to Quality</h2>
        <div className={styles['values-grid']}>
          {/* Bean Selection Card */}
          <motion.div
            className={styles['value-card']}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={styles['value-icon']}>☕</div>
            <h3>Bean Selection</h3>
            <p>We meticulously source beans from the world's premier coffee regions.</p>
          </motion.div>

          {/* Perfect Roast Card */}
          <motion.div
            className={styles['value-card']}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className={styles['value-icon']}>🔥</div>
            <h3>Perfect Roast</h3>
            <p>Our master roasters bring decades of experience to create the perfect roast profiles for each variety.</p>
          </motion.div>

          {/* Sustainability Card */}
          <motion.div
            className={styles['value-card']}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className={styles['value-icon']}>🌱</div>
            <h3>Sustainability</h3>
            <p>We're committed to environmentally responsible farming practices and supporting coffee communities.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles['site-footer']}>
        <div className={styles['footer-quote']}>
          <h2>Leon's Coffee</h2>
          <p><em>Brewed Bold. Sipped Smooth.</em></p>
        </div>

        <div className={styles['footer-grid']}>
          <div className={styles['footer-contact']}>
            <h4>Visit Us</h4>
            <address>
              123 Coffee Street<br/>
              Bean City, BC 10101
            </address>
            <p>Mon-Fri: 7am-8pm<br/>Sat-Sun: 8am-7pm</p>
          </div>

          <div className={styles['footer-links']}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/history">Our History</a></li>
              <li><a href="/menu">Menu</a></li>
            </ul>
          </div>

          <div className={styles['footer-social']}>
            <h4>Follow Us</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>
        </div>

        <p className={styles['footer-copy']}> 2025 Leon's Coffee Co. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default OurCoffeeHistory;