import "./rightbar.css";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";

export default function Rightbar({ currentuser }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <h4 className="rightbarTitle">Recommanded</h4>
          <ul className="rightbarFriendList">
            <Online />
            <Online />
            <Online />
            <Online />
          </ul>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <HomeRightbar />
      </div>
    </div>
  );
}
