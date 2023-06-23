// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";

function Footer({ light }) {
  const { size } = typography;

  return (
    <MDBox position="relative" width="100%" bottom={0} pt={4} pb={2}>
      <Container>
        <MDBox
          width="100%"
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
          px={1.5}
        >
          <MDBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            color={light ? "white" : "text"}
            fontSize={size.sm}
          >
            &copy; {new Date().getFullYear()}, made with
            <MDBox
              fontSize={size.md}
              color={light ? "white" : "dark"}
              mb={-0.5}
              mx={0.25}
            >
              <Icon color="inherit" fontSize="inherit">
                favorite
              </Icon>
            </MDBox>
            by
            <Link href="#">
              <MDTypography
                variant="button"
                fontWeight="medium"
                color={light ? "white" : "dark"}
              >
                &nbsp;UY1 &nbsp;
              </MDTypography>
            </Link>
          </MDBox>
          <MDBox
            component="ul"
            sx={({ breakpoints }) => ({
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              listStyle: "none",
              mt: 1,
              mb: 0,
              p: 0,

              [breakpoints.up("lg")]: {
                mt: 0,
              },
            })}
          >
            <MDBox component="li" pr={2} lineHeight={1}>
              <Link href="#">
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  #Students
                </MDTypography>
              </Link>
            </MDBox>
            <MDBox component="li" px={2} lineHeight={1}>
              <Link href="#">
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  #Jobs
                </MDTypography>
              </Link>
            </MDBox>
            <MDBox component="li" px={2} lineHeight={1}>
              <Link href="#">
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  #Opportunities
                </MDTypography>
              </Link>
            </MDBox>
            <MDBox component="li" pl={2} lineHeight={1}>
              <Link href="#">
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  #Africa
                </MDTypography>
              </Link>
            </MDBox>
          </MDBox>
        </MDBox>
      </Container>
    </MDBox>
  );
}

// Setting default props for the Footer
Footer.defaultProps = {
  light: false,
};

// Typechecking props for the Footer
Footer.propTypes = {
  light: PropTypes.bool,
};

export default Footer;
