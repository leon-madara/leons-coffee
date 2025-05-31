// Menu.tsx
import React, { useState } from 'react';
import styles from './Menu.module.css';
import { useNavigate } from 'react-router-dom';
import accessoriesData from './BrewingAccessories.json';
import featuredBlends from '../HomePage/FeaturedBlends/products.json';
import { useCart } from '../../contexts/CartContext';

// Product types
interface Product {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  tags: string[];
}

// Accessory type
interface Accessory {
  id: string;
  name: string;
  price: number;
  selected: boolean;
  imageSrc: string;
}

// Filter featured blends
const homeBrewBeans = featuredBlends.filter((item: Product) => item.category === 'Home-Brew Beans');
const baristaDrinks = featuredBlends.filter((item: Product) => item.category === 'Ready-Made Drink');

const Menu: React.FC = () => {
  // Tab state (drinks or beans)
  const [activeTab, setActiveTab] = useState<'drinks' | 'beans'>('drinks');

  // Bundle state
  const [selectedBeans, setSelectedBeans] = useState<string[]>([]);
  const [selectedAccessory, setSelectedAccessory] = useState<string | null>(null);

  // Use cart context
  const { addItem } = useCart();
  const navigate = useNavigate();

  // Add to cart handlers
  const handleAddToCart = (productId: string) => {
    const product = [...homeBrewBeans, ...baristaDrinks].find(p => p.id === productId);
    if (product) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.imageSrc
      });
    }
  };

  const handleAddBundleToCart = () => {
    // Add selected beans to cart
    selectedBeans.forEach(beanId => {
      const bean = homeBrewBeans.find((p: Product) => p.id === beanId);
      if (bean) {
        addItem({
          id: bean.id,
          name: bean.name,
          price: bean.price * 0.9, // Apply 10% bundle discount
          quantity: 1,
          image: bean.imageSrc
        });
      }
    });

    // Add selected accessory to cart if any
    if (selectedAccessory) {
      const accessory = accessoriesData.find((a: Accessory) => a.id === selectedAccessory);
      if (accessory) {
        addItem({
          id: accessory.id,
          name: accessory.name,
          price: accessory.price,
          quantity: 1,
          image: accessory.imageSrc
        });
      }
    }

    // Reset selections
    setSelectedBeans([]);
    setSelectedAccessory(null);

    // Navigate to cart page
    navigate('/cart');
  };

  // Toggle bean selection in bundle
  const toggleBeanSelection = (beanId: string) => {
    if (selectedBeans.includes(beanId)) {
      setSelectedBeans(selectedBeans.filter(id => id !== beanId));
    } else if (selectedBeans.length < 3) {
      setSelectedBeans([...selectedBeans, beanId]);
    }
  };

  // Calculate bundle total
  const calculateBundleTotal = () => {
    const beansTotal = selectedBeans.reduce((total, beanId) => {
      const bean = homeBrewBeans.find((p: Product) => p.id === beanId);
      return total + (bean?.price || 0);
    }, 0);

    const accessoryPrice = selectedAccessory
      ? accessoriesData.find((a: Accessory) => a.id === selectedAccessory)?.price || 0
      : 0;

    // Apply 10% discount if at least one bean is selected
    const subtotal = beansTotal + accessoryPrice;
    return selectedBeans.length > 0 ? (subtotal * 0.9).toFixed(2) : subtotal.toFixed(2);
  };

  return (
    <div className={styles.menuContainer}>

      {/*Menu Header */}
      <div className={styles.menuHeader}>
        <h1 className={styles.menuHeaderTitle}>Our Menu</h1>
        <p className={styles.menuHeaderDescription}>Explore our carefully crafted menu, featuring a selection of expertly roasted coffee drinks and premium coffee beans. Whether you're looking for a quick caffeine fix or a more in-depth coffee experience, our menu has something for everyone.</p>
        {/* <p className={styles.menuHeaderDescription}>Our menu is designed to be both delicious and healthy, with a focus on using only the finest ingredients. From our signature espresso drinks to our premium coffee beans, we take pride in every sip.</p> */}
        {/* <p className={styles.menuHeaderDescription}>From signature espresso drinks to premium coffee beans for home brewing, discover your new favorite coffee experience.</p> */}
      </div>


      <div className={styles.tabsContainer}>
        <button
          className={`${styles.tabButton} ${activeTab === 'drinks' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('drinks')}
        >
          Barista Drinks
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'beans' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('beans')}
        >
          Home Brew
        </button>
      </div>

      {/* Product Grid */}
      <div className={styles.productsGrid}>
        {activeTab === 'drinks'
          ? baristaDrinks.map((product: Product) => (
            <div key={product.id} className={styles.productCard}>
              <img
                src={product.imageSrc}
                alt={product.name}
                className={styles.productImage}
              />
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              <div className={styles.productFooter}>
                <span className={styles.productPrice}>${product.price.toFixed(2)}</span>
                <button
                  className={styles.addButton}
                  onClick={() => handleAddToCart(product.id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
          : homeBrewBeans.map((product: Product) => (
            <div key={product.id} className={styles.productCard}>
              <img
                src={product.imageSrc}
                alt={product.name}
                className={styles.productImage}
              />
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              <div className={styles.productFooter}>
                <span className={styles.productPrice}>${product.price.toFixed(2)}</span>
                <button
                  className={styles.addButton}
                  onClick={() => handleAddToCart(product.id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        }
      </div>

      {/* Bundle Builder Section */}
      <div className={styles.bundleSection}>
        <h2 className={styles.bundleTitle}>Build Your Coffee Bundle</h2>
        <p className={styles.bundleDescription}>
          Create your perfect coffee package by selecting your favorite blends and
          brewing accessories.
        </p>

        <div className={styles.bundleContainer}>
          {/* Bean Selection */}
          <div className={styles.bundleStepContainer}>
            <h3 className={styles.bundleStepTitle}>1. Select up to 3 Coffee Blends</h3>
            <div className={styles.bundleOptionsGrid}>
              {homeBrewBeans.map((bean: Product) => (
                <div
                  key={bean.id}
                  className={`${styles.bundleOption} ${selectedBeans.includes(bean.id) ? styles.selectedOption : ''}`}
                  onClick={() => toggleBeanSelection(bean.id)}
                >
                  <img
                    src={bean.imageSrc}
                    alt={bean.name}
                    className={styles.bundleItemImage}
                  />
                  <h4 className={styles.bundleItemName}>{bean.name}</h4>
                  <span className={styles.bundleItemPrice}>${bean.price.toFixed(2)}</span>
                </div>
              ))
              }
            </div>
          </div>

          {/* Accessory Selection */}
          <div className={styles.bundleStepContainer}>
            <h3 className={styles.bundleStepTitle}>2. Add a Brewing Accessory (Optional)</h3>
            <div className={styles.bundleOptionsGrid}>
              {accessoriesData.map((accessory: Accessory) => (
                <div
                  key={accessory.id}
                  className={`${styles.bundleOption} ${selectedAccessory === accessory.id ? styles.selectedOption : ''}`}
                  onClick={() => setSelectedAccessory(
                    selectedAccessory === accessory.id ? null : accessory.id
                  )}
                >
                  <img
                    src={accessory.imageSrc}
                    alt={accessory.name}
                    className={styles.bundleItemImage}
                  />
                  <h4 className={styles.bundleItemName}>{accessory.name}</h4>
                  <span className={styles.bundleItemPrice}>${accessory.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bundle Total and Add to Cart */}
          <div className={styles.bundleTotalContainer}>
            <div className={styles.bundleTotal}>
              <span className={styles.bundleTotalText}>Bundle Total:</span>
              <span className={styles.bundleTotalPrice}>${calculateBundleTotal()}</span>
            </div>
            <button
              className={styles.bundleButton}
              onClick={handleAddBundleToCart}
              disabled={selectedBeans.length === 0}
            >
              Add Bundle to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
