import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContant } from "../GlobalDataProvider/GlobalData.js";
// import styles from "../styles/addacount.module.css";
const UserProfile = (props) => {
  let { setshowProfile } = useContext(GlobalContant);
  const navigate = useNavigate();
  //   console.log(props, "In UserProfile");
  return (
    <div
      style={{
        width: "600px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        // border: "2px solid red",
        height: "100%",
      }}
    >
      <p
        style={{
          color: "#fff",
          marginRight: "3px",
          width: "60%",
          height: "100%",
        }}
      >
        <Link
          to="/userprofiledetails"
          onClick={() => navigate("/userprofiledetails")}
        >
          {props.username}
        </Link>
      </p>
      <button
        style={{
          padding: "5px 10px",
          color: "black",
          backgroundColor: "#fff",
          fontSize: "20px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => {
          props.logOut(props.firebaseAuth);
          navigate("/");
          setshowProfile(false);
          alert("User Loged Out");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;