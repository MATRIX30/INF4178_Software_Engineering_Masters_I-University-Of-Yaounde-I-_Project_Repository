import "./profile.css";
import Topbar from "../../Components/topbar/Topbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Feed from "../../Components/feed/Feed";
import Rightbar from "../../Components/rightbar/Rightbar";
import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router";

export default function Profile() {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const [user, setUser] = useState({});
  // const username = useParams().username;

 /*  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);
 */
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="person/noCover.png"
                alt=""
              />
              <img
                className="profileUserImg"
                src= "person/noAvatar.png"
                
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Paul</h4>
              <span className="profileInfoDesc">dESCRIPTION</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="Patage" />
           
          </div>
        </div>
      </div>
    </>
  );
}
