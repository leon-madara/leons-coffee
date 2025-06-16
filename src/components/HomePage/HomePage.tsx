// src/components/HomePage/HomePage.tsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './homepage.module.css'
import infoStyles from './info.module.css'

// Image paths in the public directory
const cupImage = '/images/icons/coffee-cup-2.png';
const baristaImage = '/images/barista/perfect-barista-no-bg.png';
const coffeeThemeImage = '/images/favicon.png';

const HomePage: React.FC = () => {
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      
      {/* Hero Section */}
      <div className={styles.hero}>
        {/* Left: Tagline & Button */}
        <div className={styles.left}>
          <h1 className={styles.tagline}>
            Brewed Bold.<br />
            Sipped Smooth.
          </h1>
          <p className={styles.taglineTwo}>
            Experience coffee the way it's meant to be enjoyed – <br />perfectly roasted and expertly crafted.</p>
          <button
            className={styles.shopButton}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => navigate('/menu')}
          >
            Shop Now
          </button>
        </div>

        {/* Right: Frame & Cup */}
        <div className={styles.right}>
          {/* Circular Frame */}
          <div
            className={
              hovered
                ? `${styles.circleFrame} ${styles.shrinkFrame}`
                : styles.circleFrame
            }
          />
          {/* Cup Image */}
          <img
            src={cupImage}
            alt="Leon's Coffee Cup"
            className={
              hovered
                ? `${styles.cupImage} ${styles.growCup}`
                : styles.cupImage
            }
          />
        </div>
      </div>

      {/* Info Area */}
      <div className={infoStyles.infoSection}>
        <h2 className={infoStyles.infoText}>
          CRAFTED FOR TASTE,<br />
          PERFECTED BY NUMBERS
        </h2>
        <div className={infoStyles.imageStack}>
          <img
            src={baristaImage}
            alt="Barista with a perfect cup of coffee"
            className={infoStyles.infoImg}
          />
          <img
            src={coffeeThemeImage}
            alt="Coffee bean texture"
            className={infoStyles.infoImg}
          />
        </div>
      </div>
      {/* End of Info Area */}
    </div>
  )
}

export default HomePage