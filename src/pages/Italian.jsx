import React from 'react';
import styles from '../styles/seprate.module.css';
const Italian = () => {
  return (
    <div className={styles.Dishcontainer}>
      <div className={styles.Dishbox}>
        <div className={styles.Dishimg}>
          <img src="https://i.ndtvimg.com/i/2017-09/caprese-salad_625x350_51506417724.jpg" />
        </div>
        <div className={styles.Dishdata}>
          <h2>Italian Popular Dish</h2>
          <h3>. Caprese Salad with Pesto Sauce</h3>
          <p>
            {' '}
            Caprese Salad with Pesto Sauce is a fresh and distinct twist to a
            tomato salad.
          </p>
          <p>90$</p>
        </div>
      </div>
    </div>
  );
};

export default Italian;
