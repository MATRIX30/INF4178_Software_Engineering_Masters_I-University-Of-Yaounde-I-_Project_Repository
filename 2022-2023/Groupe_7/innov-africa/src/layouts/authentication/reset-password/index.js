/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-reset-cover.jpeg";
import { Alert, AlertTitle, Collapse, TextField } from "@mui/material";
import { SignUpBtn } from "layouts/authentication/common/Buttons";
import { useState } from "react";
import { resetPassword } from "api";

function Cover() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const [displayAlert, setDisplayAlert] = useState(false);
  const [errorRequest, setErrorRequest] = useState();
  const [successRequest, setSuccessRequest] = useState();
  const [loading, setLoading] = useState(false);

  //validate form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};
    if (!email) {
      errors.email = "Please enter your email address";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address";
    } else {
      try {
        setLoading(true);
        const response = await resetPassword(email);
        console.log(response.data);
        // const res = await getUser(response.data.token);
        // console.log(res.data);

        // save user token
        localStorage.setItem("username", response.data.username);

        // save current account
        // localStorage.setItem("account", JSON.stringify(res.data));

        setLoading(false);
        setErrorRequest(null);

        setSuccessRequest(
          `Salut Mr/Mme ${response.data.last_name}. Suivez les instructions envoyées à l'adresse ${email} !`
        );
        setDisplayAlert(true);
      } catch (error) {
        setLoading(false);
        setErrorRequest(error);
        setSuccessRequest(null);
        setDisplayAlert(true);
        console.log(error);
      }
    }
    setErrors(errors);
  };
  return (
    <CoverLayout coverHeight="50vh" image={bgImage}>
      <Card>
        <MDBox
          // variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Reset Password
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Vous recévrez un email pour la suite
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox>
            <form onSubmit={handleSubmit}>
              <MDBox mb={4}>
                <TextField
                  className="mt-4"
                  id="email"
                  label="Email Address"
                  margin="normal"
                  type={"email"}
                  variant="outlined"
                  fullWidth
                  size="medium"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </MDBox>
              <SignUpBtn
                loading={loading}
                // loadingText="Login..."
                text="Envoyer"
                color="var(--primaryColor)"
                variant="contained"
              />

              {/* request error */}
              {errorRequest && (
                <Collapse className="w-100 mt-4" in={displayAlert}>
                  <Alert
                    onClose={() => {
                      setDisplayAlert(false);
                    }}
                    className="w-100 text-start"
                    severity={
                      errorRequest.code === "ERR_BAD_REQUEST"
                        ? "error"
                        : "warning"
                    }
                  >
                    <AlertTitle>
                      {errorRequest.code === "ERR_BAD_REQUEST"
                        ? "Error"
                        : "Warning"}
                    </AlertTitle>
                    {errorRequest.code === "ERR_BAD_REQUEST"
                      ? "Aucun utilisateur trouvé avec cette adresse email. Veuillez réessayer!"
                      : "Une erreur s'est produite lors de la connexion. Veuillez réessayer plus tard!"}
                  </Alert>
                </Collapse>
              )}

              {/* request succes */}
              {successRequest && (
                <Collapse className="w-100" in={displayAlert}>
                  <Alert
                    onClose={() => {
                      setDisplayAlert(false);
                    }}
                    className="w-100 text-start"
                    severity="success"
                  >
                    <AlertTitle>Success</AlertTitle>
                    {successRequest}
                  </Alert>
                </Collapse>
              )}
            </form>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
