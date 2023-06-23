import "./topbar.css"; 
import {MdSearch} from "react-icons/md"

export default function Topbar() {

  return (
    <div className="topbarContainer">

      <div className="topbarCenter">
        <span className="logo">MeetWork</span>
        <div className="searchbar">
          <MdSearch className="searchIcon" />
          <input placeholder="Search for Something here " className="searchInput"/>
        </div>
      </div>
      <div className="topbarRight">
        <span className="name">Clara</span>
        <img src= "./assets/person/4.jpeg" alt="" className="topbarImg " />
      </div>
    </div>
  );
}
