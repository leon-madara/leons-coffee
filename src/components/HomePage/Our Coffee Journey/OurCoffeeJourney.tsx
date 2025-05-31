// src/components/OurHistory/OurHistory.tsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './OurCoffeeJourney.module.css'

const OurCoffeeJourney: React.FC = () => {
  const navigate = useNavigate()

  const handleExploreClick = () => {
    navigate('/history')
  }

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>
        Our Coffee Journey
      </h1>

      {/* Content Area */}
      <div className={styles.contentArea}>
        {/* Default Summary */}
        <p className={styles.historySummary}>
          Leon's Coffee began in <strong>1987</strong> when Leon CoffeeMan, a quirky mathematician frustrated with abstract equations, accidentally unlocked the secret to the perfect brew. After sixteen hours of late‑night number‑crunching, he mistakenly applied his coffee‑to‑water ratio in place of a quantum mechanics formula—and found himself tasting the richest, most harmonious cup of coffee he'd ever experienced. Word spread rapidly through campus corridors and neighborhood cafés as students, professors, and curious passersby lined up each morning to sample this unexpected delight.<br />
          With just five hundred dollars, a vintage espresso machine won in a chess tournament, and his original brewing algorithm, Leon opened a tiny, 200‑square‑foot shop nestled in the corner of an old bookstore. His first customer was the very professor who once failed his thesis for excessive coffee references. What began as a serendipitous mistake grew into a national obsession—fifteen thriving locations later, every barista still trains using Leon's <strong>"golden ratio"</strong> to ensure each cup remains as precise and delicious as that very first brew.
        </p>
      </div>
      <button 
        className={styles.exploreButton}
        onClick={handleExploreClick}
      >
        Explore Our History
      </button>
    </div>
  )
}

export default OurCoffeeJourney