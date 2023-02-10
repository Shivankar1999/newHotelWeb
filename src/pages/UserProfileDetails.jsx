import React, { useEffect, useContext } from "react";
import styles from "../styles/userprofileD.module.css";
import { GlobalContant } from "../GlobalDataProvider/GlobalData";
// import { async } from "@firebase/util";
const UserProfileDetails = () => {
  const { handleCollectAccount, gemail, username } = useContext(GlobalContant);
  const handlerender = async () => {
    console.log("Inside User Profile Details");
    await handleCollectAccount().then((docs) => docs);
    //   console.log(res);
  };
  useEffect(() => {
    handlerender();
  }, []);

  return (
    <div className={styles.ProfileSection}>
      <div className={styles.ProfileSectionBoxes}>
        <h4>
          <bold>User Name:</bold> {username}
        </h4>
        <h5>
          <bold>Email:</bold> {gemail}
        </h5>
      </div>
    </div>
  );
};

export default UserProfileDetails;
