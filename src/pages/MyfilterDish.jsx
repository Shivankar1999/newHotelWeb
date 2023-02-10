import React from "react";
import { useContext } from "react";
import { GlobalContant } from "../GlobalDataProvider/GlobalData";
import styles from "../styles/myfilter.module.css";
const MyfilterDish = () => {
  const { myfillterdish } = useContext(GlobalContant);
  console.log(myfillterdish, "Inside MyFilterComponent");

  return (
    <div className={styles.myfilterBox}>
      <div className={styles.myitemDetails}>
        <div className={styles.ImgSec}>
          <img src={myfillterdish[0].strCategoryThumb} alt="myImg" />
        </div>
        <div className={styles.itemDetsils}>
          <h3>{myfillterdish[0].strCategory}</h3>
          <p>{myfillterdish[0].strCategoryDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default MyfilterDish;
