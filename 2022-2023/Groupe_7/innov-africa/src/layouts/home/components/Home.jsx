import Feed from "mycomponents/feed/Feed";
import Rightbar from "mycomponents/rightbar/Rightbar";
import Sidebar from "mycomponents/sidebar/Sidebar";
import Topbar from "mycomponents/topbar/Topbar";
import "./home.css";
import User from "models/User";
import { useEffect, useState } from "react";

export default function Home({ currentuser }) {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const currentuser = localStorage.getItem("currentuser");
  //   const us = JSON.parse(currentuser);
  //   const userInstance = new User(us);
  //   setUser(userInstance);
  //   // console.log(user);
  // }, []);
  return (
    <>
      {/* <Topbar /> */}
      <div className="homeContainer">
        {/* <Sidebar /> */}
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
