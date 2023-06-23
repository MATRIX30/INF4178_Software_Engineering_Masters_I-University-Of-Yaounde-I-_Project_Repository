import "./message.css";
//import { format } from "timeago.js";

export default function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img className="messageImg"  src={"./assets/person/6.jpeg"} alt="" />
        <p className="messageText">{message}</p>
      </div>
      <div className="messageBottom">15h</div>
    </div>
  );
}
