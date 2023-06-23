import Feed from "mycomponents/feed/Feed";
import Rightbar from "mycomponents/rightbar/Rightbar";
import Sidebar from "mycomponents/sidebar/Sidebar";
import Topbar from "mycomponents/topbar/Topbar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />

        <Rightbar />
      </div>
    </>
  );
}
