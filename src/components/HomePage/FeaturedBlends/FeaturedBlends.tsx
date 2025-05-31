import React, { useState } from 'react'
import styles from './FeaturedBlends.module.css'
import products from './products.json'

type Product = {
  id: string;
  category: "Ready-Made Drink" | "Home-Brew Beans";
  name: string;
  description: string;
  price: number;
  currency: string;
  imageSrc: string;
  tags: string[];
}

type Tab = 'Drinks' | 'Beans' | 'Bundles'

const FeaturedBlends: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Drinks')

  // filter products based on selected tab
  const visibleProducts = (products as Product[]).filter((p) => {
    if (activeTab === 'Drinks')       return p.category === 'Ready-Made Drink'
    if (activeTab === 'Beans')        return p.category === 'Home-Brew Beans'
    if (activeTab === 'Bundles')      return p.category === 'Home-Brew Beans'
    return false
  })

  return (
    <div className={styles.blendsContainer}>
      <h1 className={styles.blendsTitle}>Our Featured Blends</h1>
      <p className={styles.blendsDescription}>
        Carefully selected and expertly roasted coffee blends that highlight our commitment to quality and flavor.
      </p>
      
      {/* Tab Navigation */}
      <div className={styles.tabNav}>
        {(['Drinks','Beans','Bundles'] as Tab[]).map((tab) => (
          <button
            key={tab}
            className={`${styles.tabButton} ${
              activeTab === tab ? styles.active : ''
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'Drinks' ? 'Barista‑Crafted Drinks'
             : tab === 'Beans'  ? 'Home‑Brew Beans'
             : 'Bundles & Kits'}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {activeTab !== 'Bundles' ? (
        <div className={styles.productGrid}>
          {visibleProducts.map((item) => (
            <div key={item.id} className={styles.productCard}>
              <img
                src={item.imageSrc}
                alt={item.name}
                className={styles.productImage}
              />
              <h3 className={styles.productName}>{item.name}</h3>
              <p className={styles.tastingNotes}>{item.description}</p>
              <div className={styles.cardFooter}>
                <span className={styles.price}>
                  ${item.price.toFixed(2)}
                </span>
                <button className={styles.actionButton}>
                  {activeTab === 'Drinks' ? 'Order Now' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Bundles & Kits */
        <div className={styles.bundleSection}>
          <h2 className={styles.bundleTitle}>Build Your Perfect Box</h2>
          <div className={styles.bundleGrid}>
            {visibleProducts.map((item) => (
              <div key={item.id} className={styles.bundleCard}>
                <img
                  src={item.imageSrc}
                  alt={item.name}
                  className={styles.bundleImage}
                />
                <h4>{item.name}</h4>
                <button className={styles.selectButton}>Select</button>
              </div>
            ))}
          </div>
          <div className={styles.bundleCta}>
            <p className={styles.discount}>Mix 4 varieties and save 10%</p>
              <button className={styles.ctaButton}>
                Build My Box
              </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FeaturedBlends 