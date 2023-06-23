import "./sidebar.css";
import {CgCommunity,CgProfile} from 'react-icons/cg'
import {BsChat} from 'react-icons/bs'
import {RiSettings3Line} from 'react-icons/ri'
import {BiLogOut} from 'react-icons/bi'
import {GrNotification} from 'react-icons/gr'
import {MdRssFeed,MdAddAPhoto} from 'react-icons/md'


export default function Sidebar() {
  return (
    <div className="sidebar">
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
        {/* <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
        
        </ul> */}
      </div>
    </div>
  );
}
