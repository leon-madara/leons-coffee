// src/components/HistoryOnHover.tsx
import React from 'react';
import styles from './HistoryOnHover.module.css';

interface Props {
  hoverImgSrc: string;
  alt: string;
  text: string;
}

const HistoryOnHover: React.FC<Props> = ({ hoverImgSrc, alt, text }) => (
  <div className={styles.interactive}>
    <div className={styles.imageWrapper}>
      <img
        src={hoverImgSrc}
        alt={alt}
        className={styles.image}
      />

    </div>
    <div className={styles.textWrapper}>
      <p className={styles.text}>{text}</p>
    </div>
  </div>
);

export default HistoryOnHover;