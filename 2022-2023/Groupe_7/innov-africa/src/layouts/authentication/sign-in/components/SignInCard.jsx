import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { SignInForm } from "./SingInForm";

// Images

export const SignInCard = () => {
  return (
    <Card>
      <MDBox
        // variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="info"
        mx={2}
        mt={-3}
        p={2}
        mb={1}
        textAlign="center"
      >
        <MDTypography variant="h2" fontWeight="medium" color="white" mt={1}>
          Connexion
        </MDTypography>
        <small className="desc-auth-page text-white mt-1">
          Connectez vous à votre compte avant de continuer
        </small>
      </MDBox>
      <MDBox pt={2} pb={3} px={3}>
        <MDBox>
          <MDBox mt={3} mb={1} textAlign="center">
            <SignInForm />
            <MDTypography variant="button" color="text">
              Mot de passe oublié?{" "}
              <MDTypography
                component={Link}
                to="/authentication/reset-password"
                variant="button"
                color="info"
                fontWeight="medium"
              >
                Réinitialiser
              </MDTypography>
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
};
