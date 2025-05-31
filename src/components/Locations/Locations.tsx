import React from 'react';
import { motion } from 'framer-motion';
import LocationsMinimalist from './LocationsMinimalist.module.css';

const Locations: React.FC = () => {
  return (
    <div className={LocationsMinimalist.container}>
      {/* Hero Section */}
      <div className={LocationsMinimalist.hero}>
        <h1 className={LocationsMinimalist.heroTitle}>
          Find Us<br />
          Wherever You Are
        </h1>
        <p className={LocationsMinimalist.heroText}>
          Discover our cozy corners and vibrant spaces in your neighborhood.
          Each location offers a unique experience while maintaining our signature quality.
        </p>
      </div>

      {/* Locations Grid */}
      <main className={LocationsMinimalist.locationsGrid}>
        <div className={LocationsMinimalist.locationCards}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={LocationsMinimalist.locationCard}>
              <h2 className={LocationsMinimalist.locationName}>Downtown</h2>
              <div className={LocationsMinimalist.locationContent}>
                <div className={LocationsMinimalist.imageContainer}>
                  <div className={LocationsMinimalist.imagePlaceholder}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="12" cy="12" r="1.5"></circle>
                    </svg>
                  </div>
                </div>
                <div className={LocationsMinimalist.locationDetails}>
                  <p><span className={LocationsMinimalist.label}>Address:</span> 123 Coffee Street, Bean City</p>
                  <p><span className={LocationsMinimalist.label}>Hours:</span> Mon-Fri: 6am-8pm</p>
                  <p className={LocationsMinimalist.hoursWeekend}>Sat-Sun: 7am-9pm</p>
                  <p><span className={LocationsMinimalist.label}>Phone:</span> (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className={LocationsMinimalist.locationCard}>
              <h2 className={LocationsMinimalist.locationName}>Westside</h2>
              <div className={LocationsMinimalist.locationContent}>
                <div className={LocationsMinimalist.imageContainer}>
                  <div className={LocationsMinimalist.imagePlaceholder}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="12" cy="12" r="1.5"></circle>
                    </svg>
                  </div>
                </div>
                <div className={LocationsMinimalist.locationDetails}>
                  <p><span className={LocationsMinimalist.label}>Address:</span> 456 Espresso Ave, Bean City</p>
                  <p><span className={LocationsMinimalist.label}>Hours:</span> Mon-Fri: 7am-7pm</p>
                  <p className={LocationsMinimalist.hoursWeekend}>Sat-Sun: 8am-6pm</p>
                  <p><span className={LocationsMinimalist.label}>Phone:</span> (555) 765-4321</p>
                </div>
              </div>
            </div>

            <div className={LocationsMinimalist.locationCard}>
              <h2 className={LocationsMinimalist.locationName}>University District</h2>
              <div className={LocationsMinimalist.locationContent}>
                <div className={LocationsMinimalist.imageContainer}>
                  <div className={LocationsMinimalist.imagePlaceholder}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="12" cy="12" r="1.5"></circle>
                    </svg>
                  </div>
                </div>
                <div className={LocationsMinimalist.locationDetails}>
                  <p><span className={LocationsMinimalist.label}>Address:</span> 789 Latte Lane, Bean City</p>
                  <p><span className={LocationsMinimalist.label}>Hours:</span> Mon-Fri: 6am-10pm</p>
                  <p className={LocationsMinimalist.hoursWeekend}>Sat-Sun: 7am-8pm</p>
                  <p><span className={LocationsMinimalist.label}>Phone:</span> (555) 987-6543</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className={LocationsMinimalist.footer}>
        <p> 2025 Leon's Coffee. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Locations;
