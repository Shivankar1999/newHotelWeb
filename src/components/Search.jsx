import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContant } from "../GlobalDataProvider/GlobalData";
import styles from "../styles/navbar.module.css";
const Search = () => {
  const [Dish, setDish] = useState(null);
  const { products, setmyfillterdish } = useContext(GlobalContant);
  let navigate = useNavigate();

  const handleFilters = (e) => {
    e.preventDefault();
    let MySearch = products.filter(
      (pro) =>
        pro.strCategory.trim().toLowerCase() === Dish.trim().toLowerCase()
    );
    if (MySearch.length != 0) {
      setmyfillterdish(MySearch);
      navigate("/myfilterdish");
      setDish("");
    } else if (MySearch.length == 0) {
      alert("Does not match");
      setmyfillterdish([]);
      setDish("");
      navigate("/");
      return;
    }
  };
  return (
    <div className={styles.SearchInput}>
      <form onSubmit={handleFilters}>
        <input
          onChange={(e) => setDish(e.target.value)}
          value={Dish}
          type="text"
          placeholder="Enter Your Food"
        />
        <button type="search">Search</button>
      </form>
    </div>
  );
};

export default Search;
