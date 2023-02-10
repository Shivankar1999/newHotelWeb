import React, { useContext, memo } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/products.module.css";
import { GlobalContant } from "../GlobalDataProvider/GlobalData.js";

const Product = ({ products }) => {
  let { setProduct, setCartCount, showProfile, myfillterdish } =
    useContext(GlobalContant);
  console.log(myfillterdish, "myfillterdish");
  let ItemC = [];
  const getProduct = (id) => {
    let resD = products.filter((item) => item.idCategory == id);
    setProduct(resD);
  };

  const setLocalStorage = (id) => {
    let itemcart = products.filter((item) => item.idCategory == id);

    ItemC.push(itemcart[0]);
    localStorage.setItem("cartItem", JSON.stringify(ItemC));

    setCartCount(ItemC.length);
    alert("Item Added");
  };
  return (
    <section className={styles.landingSec}>
      {products.map((product) => {
        return (
          <div className={styles.productItem} key={product.idCategory}>
            <div className={styles.imgB}>
              <img src={`${product.strCategoryThumb}`} alt="img-data" />
            </div>
            <div className={styles.productD}>
              <h3>
                <bold></bold>
                {product.strCategory}
              </h3>
              <div className={styles.btnBox}>
                {showProfile == true ? (
                  <Link
                    onClick={() => {
                      setLocalStorage(product.idCategory);
                    }}
                  >
                    Add To my Fav
                  </Link>
                ) : (
                  <Link
                    onClick={() => {
                      alert("Sorry Create account and Login..");
                    }}
                  >
                    Add to Fav
                  </Link>
                )}

                <Link
                  to={"/productdetail"}
                  onClick={() => {
                    getProduct(product.idCategory);
                  }}
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default React.memo(Product);
