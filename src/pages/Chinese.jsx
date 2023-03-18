import React from 'react';
import styles from '../styles/seprate.module.css';
const Chinese = () => {
  return (
    <div className={styles.Dishcontainer}>
      <div className={styles.Dishbox}>
        <div className={styles.Dishimg}>
          <img src="https://images.chinahighlights.com/allpicture/2021/12/d247e7d25b164b77841f6022_cut_750x400_39.webp" />
        </div>
        <div className={styles.Dishdata}>
          <h2>China Popular Dish</h2>
          <h3>. Peking Roasted Duck</h3>
          <p>
            Peking duck (北京烤鸭 Běijīng kǎoyā) is a famous dish from Beijing,
            enjoying world fame, and considered as one of China national dishes.
            Peking duck is savored for its thin and crispy skin. Sliced Peking
            duck is often eaten with pancakes, sweet bean sauce, or soy sauce
            with mashed garlic. It is a must-taste dish in Beijing!
          </p>
          <p>90$</p>
        </div>
      </div>
    </div>
  );
};

export default Chinese;
