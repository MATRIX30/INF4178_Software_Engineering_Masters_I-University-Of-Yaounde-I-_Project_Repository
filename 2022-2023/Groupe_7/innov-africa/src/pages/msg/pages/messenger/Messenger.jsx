import "./messenger.css";
import { useContext, useEffect, useRef, useState } from "react";
import ChatOnline from "../../Components/chatOnline/ChatOnline";
import { CgCommunity, CgProfile } from "react-icons/cg";
import { BsChat } from "react-icons/bs";
import { RiSettings3Line } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import { MdRssFeed, MdAddAPhoto } from "react-icons/md";
import Topbar from "mycomponents/topbar/Topbar";
import Message from "pages/msg/Components/message/Message";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const scrollRef = useRef();

  /* useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        user.followings.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post("/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]); */

  return (
    <>
      {/* <Topbar /> */}
      <div className="messenger">
        {/* <div className="chatMenu">
          <div className="chatMenuWrapper">
            <div className="sidebarWrapper">
              <ul className="sidebarList">
                <li className="sidebarListItem">
                  <MdRssFeed className="sidebarIcon" />
                  <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                  <CgCommunity className="sidebarIcon" />
                  <span className="sidebarListItemText">My Community</span>
                </li>
                <li className="sidebarListItem">
                  <BsChat className="sidebarIcon" />
                  <span className="sidebarListItemText">Messages</span>
                </li>
                <li className="sidebarListItem">
                  <GrNotification className="sidebarIcon" />
                  <span className="sidebarListItemText">Notifications </span>
                </li>
                <li className="sidebarListItem">
                  <CgProfile className="sidebarIcon" />
                  <span className="sidebarListItemText">Profile</span>
                </li>
                <li className="sidebarListItem">
                  <RiSettings3Line className="sidebarIcon" />
                  <span className="sidebarListItemText">Settings</span>
                </li>
                <li className="sidebarListItem">
                  <BiLogOut className="sidebarIcon" />
                  <span className="sidebarListItemText">Log out</span>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <div ref={scrollRef}>
                <Message message={"hey comment ca vas ?"} own={""} />
                <Message
                  message={"Super et toi comment ca vas ?"}
                  own={"own"}
                />
                <Message message={"hey comment ca vas ?"} own={""} />
                <Message
                  message={"Super et toi comment ca vas ?"}
                  own={"own"}
                />
                <Message message={"hey comment ca vas ?"} own={""} />
                <Message
                  message={"Super et toi comment ca vas ?"}
                  own={"own"}
                />
                <Message message={"hey comment ca vas ?"} own={""} />
                <Message
                  message={"Super et toi comment ca vas ?"}
                  own={"own"}
                />
                <Message message={"hey comment ca vas ?"} own={""} />
                <Message
                  message={"Super et toi comment ca vas ?"}
                  own={"own"}
                />
                <Message message={"hey comment ca vas ?"} own={""} />
                <Message
                  message={"Super et toi comment ca vas ?"}
                  own={"own"}
                />
                <Message message={"hey comment ca vas ?"} own={""} />
                <Message
                  message={"Super et toi comment ca vas ?"}
                  own={"own"}
                />
                <Message message={"hey comment ca vas ?"} own={""} />
                <Message
                  message={"Super et toi comment ca vas ?"}
                  own={"own"}
                />
                <Message message={"hey comment ca vas ?"} own={""} />
                <Message
                  message={"Super et toi comment ca vas ?"}
                  own={"own"}
                />
              </div>
            </div>
            <div className="chatBoxBottom">
              <input
                type="text"
                className="chatMessageInput"
                placeholder="write something..."
                onChange={(e) => setNewMessage(e.target.value)}
                value={newMessage}
              />
              <button className="chatSubmitButton">Send</button>
            </div>

            {/* (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            ) */}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}
