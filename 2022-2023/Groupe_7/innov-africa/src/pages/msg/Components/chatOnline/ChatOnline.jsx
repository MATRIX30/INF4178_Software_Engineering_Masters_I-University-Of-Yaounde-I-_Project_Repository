import { useEffect, useState } from "react";
import "./chatOnline.css";

export default function ChatOnline() {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

 /*  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/users/friends/" + currentId);
      setFriends(res.data);
    };

    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `/conversations/find/${currentId}/${user._id}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  }; */

  return (
    <div className="chatOnline">
     
        <div className="chatOnlineFriend" >
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={"./assets/person/3.jpeg"}
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">Nina Coorporation</span>
        </div>
      
    </div>
  );
}
