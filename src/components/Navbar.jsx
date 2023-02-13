import React, { useContext } from "react";
import { GlobalContant } from "../GlobalDataProvider/GlobalData.js";
import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";
import { UserProfile } from "../pages";
import Search from "./Search.jsx";
// import {UserProfile}  from '../p'
export const Navbar = () => {
  let { CartCount, username, signOut, firebaseAuth, showProfile } =
    useContext(GlobalContant);

  return (
    <div className={styles.navcontainer}>
      <nav className={styles.navItems}>
        <div className={styles.logo}>
          <Link to={"/"} className={styles.LogoB}>
            Food Arena
          </Link>
          <div className={styles.navlinkBox}>
            <Search />
          </div>
        </div>

        <div className={styles.userData}>
          {showProfile == true ? (
            <UserProfile
              username={username}
              logOut={signOut}
              firebaseAuth={firebaseAuth}
            />
          ) : (
            <Link to={"/addacount"}>Add Account</Link>
          )}

          {showProfile == true ? (
            <Link to={"/mycartitem"}>
              <span className={styles.cartcount}>{CartCount}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bag-check"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </Link>
          ) : (
            <Link to={"/addacount"} onClick={() => alert("Please Login")}>
              {/* <span className={styles.cartcount}>{CartCount}</span> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bag-check"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};
