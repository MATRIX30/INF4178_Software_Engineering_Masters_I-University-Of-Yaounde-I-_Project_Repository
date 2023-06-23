// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// import profileImage from "assets/images/bruce-mars.jpg";
import Feed from "mycomponents/feed/Feed";
import Home from "./components/Home";
import User from "models/User";
import { useState } from "react";
import Rightbar from "mycomponents/rightbar/Rightbar";
import Profile from "models/Profile";

function Dashboard() {
  const profileName = "Tommy";
  const profileImage = null;
  const [user, setUser] = useState(
    // JSON.parse(localStorage.getItem("currentuser"))
    new User(JSON.parse(localStorage.getItem("currentuser")))
  );
  // const [user, setUser] = useState(
  //   new User({
  //     id: 1,
  //     username: "Tom",
  //     password: "123",
  //     phone: "237656789174",
  //     firstName: "Michel",
  //     lastName: "BTOMPE",
  //     photo: "",
  //     profile: new Profile({ id: 1, name: "student" }),
  //   })
  // );
  return (
    <DashboardLayout>
      <DashboardNavbar profileImage={user.photo} profileName={user.username} />
      {/* <MDBox py={3}> */}
      {/* <Home currentuser={user} /> */}
      <div className="homeContainer">
        <Feed currentuser={user} />
        <Rightbar />
      </div>

      {/* </MDBox> */}
    </DashboardLayout>
  );
}

export default Dashboard;
