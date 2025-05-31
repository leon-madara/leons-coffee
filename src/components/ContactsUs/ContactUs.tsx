// ContactUs.tsx
import React, { useState } from 'react';
import styles from './ContactUs.module.css';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Submit logic would go here
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.mainTitle}>Contact Us</h1>
      
      <div className={styles.contactContent}>
        {/* Left column - Contact Form */}
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>
          
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className={styles.inputField}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className={styles.inputField}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.inputField}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                className={styles.messageField}
                rows={6}
              />
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
        
        {/* Right column - Contact Information */}
        <div className={styles.infoSection}>
          <h2 className={styles.sectionTitle}>Contact Information</h2>
          
          <div className={styles.infoCard}>
            <div className={styles.infoGroup}>
              <h3 className={styles.infoTitle}>Main Office</h3>
              <p className={styles.infoText}>123 Coffee Street</p>
              <p className={styles.infoText}>Bean City, BC 10101</p>
              <p className={styles.infoText}>United States</p>
            </div>
            
            <div className={styles.infoGroup}>
              <h3 className={styles.infoTitle}>Phone</h3>
              <p className={styles.infoText}>(555) 123-4567</p>
            </div>
            
            <div className={styles.infoGroup}>
              <h3 className={styles.infoTitle}>Email</h3>
              <p className={styles.infoText}>hello@leonscoffee.com</p>
            </div>
            
            <div className={styles.infoGroup}>
              <h3 className={styles.infoTitle}>Hours</h3>
              <p className={styles.infoText}>Monday - Friday: 9am - 5pm</p>
              <p className={styles.infoText}>Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;