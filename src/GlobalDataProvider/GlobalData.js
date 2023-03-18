import { createContext, useEffect, useState } from "react";
import { res } from "../DB/MyData.js";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import axios from "axios";

const firebaseConfig = {
  apiKey: "AIzaSyDW9Vqiu0JMoHEe7Xs0HDa9X3KN7hxUjWQ",
  authDomain: "urecomapp.firebaseapp.com",
  projectId: "urecomapp",
  storageBucket: "urecomapp.appspot.com",
  messagingSenderId: "326557543596",
  appId: "1:326557543596:web:743f8f579c135b4171c309",
};

const firebaseApp = initializeApp(firebaseConfig);

const firestore = getFirestore(firebaseApp);
const firebaseAuth = getAuth(firebaseApp);

export const GlobalContant = createContext(null);

export const GlobalData = ({ children }) => {
  const [username, setUserName] = useState("");
  const [gemail, setGemail] = useState("");
  const [user, setuser] = useState(null);
  const [showProfile, setshowProfile] = useState(false);
  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState([]);
  const [CartCount, setCartCount] = useState("0");
  const [loader, setloader] = useState(true);
  const [myfillterdish, setmyfillterdish] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setuser(user);
      } else {
        setuser(null);
      }
    });
  }, []);

  // Firebase Functions
  const CreateUserWemailPass = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  const SignInUserWemailPass = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);
  console.log(user, "User");
  const isLogedIn = user ? "true" : "false";

  const handleAccountslistDetails = async (name, email, password) => {
    await addDoc(collection(firestore, "accounts"), {
      name,
      email,
      userID: user.uid,
      password,
      userItem: [],
    });
  };

  const handleCollectAccount = () => {
    return getDoc(collection(firestore, "accounts"));
  };
  // App Functions

  useEffect(() => {
    const getAllD = async () => {
      // let Output = await axios(
      //   "www.themealdb.com/api/json/v1/1/categories.php"
      // );
      // console.log(Output, "My Data");
      setloader(false);
      console.log(res.categories);

      setProducts(res.categories);
      // console.log(data);
    };
    getAllD();
    if (localStorage.getItem("cartItem")) {
      let getCartCount = JSON.parse(localStorage.getItem("cartItem")).length;
      // console.log(getCartCount);
      setCartCount(getCartCount);
    }
  }, []);

  return (
    <GlobalContant.Provider
      value={{
        products,
        setProducts,
        product,
        setProduct,
        CartCount,
        setCartCount,
        loader,
        setloader,

        CreateUserWemailPass,
        SignInUserWemailPass,
        isLogedIn,
        setUserName,
        username,
        signOut,
        firebaseAuth,
        setshowProfile,
        showProfile,
        setmyfillterdish,
        myfillterdish,
        handleAccountslistDetails,
        handleCollectAccount,
        setGemail,
        gemail,
      }}
    >
      {children}
    </GlobalContant.Provider>
  );
};
