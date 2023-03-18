import React from 'react';
import styles from '../styles/seprate.module.css';
const Japnese = () => {
  return (
    <div className={styles.Dishcontainer}>
      <div className={styles.Dishbox}>
        <div className={styles.Dishimg}>
          <img src="https://hips.hearstapps.com/hmg-prod/images/spicy-crab-rolls4-1654808938.jpg?crop=1.00xw:0.752xh;0,0.142xh&resize=1200:*" />
        </div>
        <div className={styles.Dishdata}>
          <h2>Japanese Popular Dish</h2>
          <h3>. sushi-grade fish</h3>
          <p>
            The word sushi actually means “sour rice” in Japanese, so if you’re
            going to attempt sushi at home, you’ve got to get it right. Don’t be
            intimidated, we’ve got a sushi rice guide to get you started.
            Basically, you’ll be adding rice wine vinegar (the “sour”) to your
            rice in a particular way. If it’s not perfect the first time, no
            worries—your rolls will still taste delicious. .
          </p>
          <p>20$</p>
        </div>
      </div>
    </div>
  );
};

export default Japnese;
