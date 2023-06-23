/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DefaultNavbar from "examples/Navbars/welcomeNavbar";
import PageLayout from "examples/LayoutContainers/PageLayout";

// Authentication pages components
import Footer from "layouts/authentication/components/Footer";

const HomeLayout = ({ image, children }) => {
  return (
    <PageLayout>
      <DefaultNavbar
        action={{
          type: "internal",
          route: "/welcome",
          label: "connexion",
          color: "dark",
        }}
      />
      <MDBox position="absolute" width="100%" minHeight="100vh" />
      <MDBox px={1} pt={15} width="100%" height="100vh" mx="auto">
        <Grid
          container
          spacing={1}
          // justifyContent="center"
          // alignItems="center"
          height="100%"
        >
          {/* <Grid item xs={11} sm={9} md={5} lg={4} xl={3}> */}
          {children}
          {/* </Grid> */}
        </Grid>
      </MDBox>
    </PageLayout>
  );
};

// Typechecking props for the HomeLayout
HomeLayout.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HomeLayout;
