/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================
*/

import { useState, useEffect } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Material Dashboard 2 React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
// import burceMars from "assets/images/bruce-mars.jpg";
import backgroundImage from "assets/images/bg-profile.jpeg";
import { Link, Tooltip } from "@mui/material";
import MDButton from "components/MDButton";

function Header({
  children,
  profileImage,
  profileName,
  profileRole,
  tabView,
  update,
  setUpdate,
}) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  // profile update ?
  const handleSetUpdate = () => {
    setUpdate(!update);
  };

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

  const handleSetTabValue = (event, newValue) => {
    setTabValue(newValue);
    // alert(newValue);
  };

  return (
    <MDBox position="relative" mb={5}>
      <MDBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({
            functions: { rgba, linearGradient },
            palette: { gradients },
          }) =>
            // `${linearGradient(
            //   rgba(gradients.info.main, 0.6),
            //   rgba(gradients.info.state, 0.6)
            // )},
            `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      <Card
        sx={{
          position: "relative",
          mt: -8,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <MDAvatar
              src={profileImage}
              alt="profile-image"
              size="xl"
              shadow="sm"
            />
          </Grid>
          <Grid item>
            <MDBox height="100%" mt={0.5} lineHeight={1}>
              <MDTypography variant="h5" fontWeight="medium">
                {profileName}
              </MDTypography>
              <MDTypography variant="button" color="text" fontWeight="regular">
                {profileRole}
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item>
            <MDTypography component={Link} variant="body2" color="secondary">
              <Tooltip title="Edit Profile" placement="top">
                <MDButton onClick={handleSetUpdate} color="mysecondary">
                  {update ? "Annuler" : "Modifier"}
                </MDButton>
              </Tooltip>
            </MDTypography>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              {tabView}
              {/* <Tabs
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
              </Tabs> */}
            </AppBar>
          </Grid>
        </Grid>
        {children}
      </Card>
    </MDBox>
  );
}

// Setting default props for the Header
Header.defaultProps = {
  children: "",
};

// Typechecking props for the Header
Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
