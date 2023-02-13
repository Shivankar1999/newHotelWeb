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
        width: "400px",
        display: "flex",
        justifyContent: "space-around",
        marginLeft: "3px",
        alignItems: "center",
        // border: "2px solid red",
        height: "100%",
      }}
    >
      <p
        style={{
          color: "#fff",
          marginRight: "3px",
          marginLeft: "7px",
          width: "40%",
          height: "100%",
          transform: "scale(0.8)",
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
          padding: "5px 3px",
          color: "black",
          backgroundColor: "#fff",
          fontSize: "15px",
          fontWeight: "light",
          cursor: "pointer",
          margin: "2px 8px",
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
