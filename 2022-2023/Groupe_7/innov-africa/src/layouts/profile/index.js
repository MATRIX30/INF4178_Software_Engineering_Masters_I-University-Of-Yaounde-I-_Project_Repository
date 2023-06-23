/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
// import ProfilesList from "examples/Lists/ProfilesList";
// import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/profile/components/Header";

// Material Dashboard 2 React base styles
import breakpoints from "assets/theme/base/breakpoints";

import { useEffect, useState } from "react";

import burceMars from "assets/images/bruce-mars.jpg";
import User from "models/User";
import { API_URL } from "data/my_data";
import Footer from "layouts/authentication/components/Footer";
import { Box, Icon, Tab, Tabs } from "@mui/material";

// @mui material components
import Card from "@mui/material/Card";
import { UpdateForm } from "./components/UpdateForm";

function Overview() {
  const [profileImage, setProfileImage] = useState(/*burceMars*/);
  const [profileName, setProfileName] = useState("Tom Michel");
  const [profileRole, setProfileRole] = useState("Administrateur");
  const [user, setUser] = useState(
    new User(JSON.parse(localStorage.getItem("currentuser")))
  );

  // profile update ?
  const [update, setUpdate] = useState(false);

  // profile display
  const [bio, setBio] = useState("");
  const [userType, setUserType] = useState("");
  const [level, setLevel] = useState("");
  const [profileId, setProfileId] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    // const currentuser = JSON.stringify(response.data.currentuser);
    // const userInstance = new User(JSON.parse(currentuser));
    // localStorage.setItem("currentuser", JSON.stringify(userInstance));

    const currentuser = localStorage.getItem("currentuser");
    const us = JSON.parse(currentuser);
    const userInstance = new User(us);
    // setUser(userInstance);
    // console.log(userInstance);

    if (userInstance.photo !== null) {
      setProfileImage(userInstance.photo);
    }
    setProfileName(
      userInstance.firstName.split(" ")[0] +
        " " +
        userInstance.lastName.split(" ")[0].toUpperCase()
    );
    setProfileRole(userInstance.profile.name.toUpperCase());
    !userInstance.bio
      ? setBio("Aucune bio ajoutée pour le moment")
      : setBio(userInstance.bio);
    setProfileId(userInstance.id);
    setUserType(userInstance.profile.name);
    setLevel(userInstance.level);
    setLastName(userInstance.lastName);
    setFirstName(userInstance.firstName);
    setAddress(userInstance.address);
    setEmail(userInstance.username);
    setPhone(userInstance.phone);
    console.log(user);
  }, []);

  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSetTabValue = (event, newValue) => {
    setTabValue(newValue);
    // alert(newValue);
  };
  const pColor = "var(--signUpColor)";

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header
        update={update}
        setUpdate={setUpdate}
        profileImage={profileImage}
        profileName={profileName}
        profileRole={profileRole}
        tabView={
          <Tabs
            orientation={tabsOrientation}
            value={tabValue}
            onChange={handleSetTabValue}
          >
            <Tab
              label="Infos"
              icon={
                <Icon fontSize="small" sx={{ mt: -0.25 }}>
                  assignment_ind
                </Icon>
              }
            />
            <Tab
              label="Actions"
              icon={
                <Icon fontSize="small" sx={{ mt: -0.25 }}>
                  rule
                </Icon>
              }
            />
            <Tab
              label="Notifs"
              icon={
                <Icon fontSize="small" sx={{ mt: -0.25 }}>
                  notifications
                </Icon>
              }
            />
          </Tabs>
        }
      >
        {tabValue === 0 ? (
          <MDBox mt={5} mb={3}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12} xl={12} sx={{ display: "flex" }}>
                {!update ? (
                  <ProfileInfoCard
                    title="Bio"
                    description={bio}
                    info={{
                      Noms: lastName,
                      Prénoms: firstName,
                      Address: address,
                      Email: email,
                      Telephone: phone,
                    }}
                    shadow={false}
                  />
                ) : (
                  <Card sx={{ height: "100%", boxShadow: "none" }}>
                    <MDBox
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      pt={2}
                      px={2}
                    >
                      <UpdateForm
                        pColor={pColor}
                        lastNameUser={lastName}
                        profileId={profileId}
                        firstNameUser={firstName}
                        addressUser={address}
                        emailUser={email}
                        phoneUser={phone}
                        levelUser={userType === "student" ? level : null}
                      />
                    </MDBox>
                  </Card>
                )}
              </Grid>
            </Grid>
          </MDBox>
        ) : tabValue === 1 ? (
          <MDBox mt={5} mb={3}>
            Actions
          </MDBox>
        ) : (
          <MDBox mt={5} mb={3}>
            Notifs
          </MDBox>
        )}
        {/* <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} xl={12} sx={{ display: "flex" }}>
              <ProfileInfoCard
                title="Bio"
                description={bio}
                info={{
                  Noms: lastName,
                  Prénoms: firstName,
                  Ville: address,
                  Quartier: quarter,
                  Email: email,
                  Telephone: phone,
                }}
                shadow={false}
              />
            </Grid>
          </Grid>
        </MDBox> */}
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
