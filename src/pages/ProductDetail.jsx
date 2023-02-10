import React, { useContext } from "react";
import { GlobalContant } from "../GlobalDataProvider/GlobalData.js";
import styles from "../styles/productD.module.css";
const ProductDetail = () => {
  const { product } = useContext(GlobalContant);

  return (
    <div className={styles.paroductIBox}>
      <div className={styles.productD}>
        <div className={styles.proImgBox}>
          <img src={product[0].strCategoryThumb} alt="prod" />
        </div>
        <div className={styles.Pcontent}>
          <h3>{product[0].strCategory}</h3>
          <p>{product[0].strCategoryDescription}</p>
          <p>Rating : 4.3</p>
          <button>Add To Cart </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
