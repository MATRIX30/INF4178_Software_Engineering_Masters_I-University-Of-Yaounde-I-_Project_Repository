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
import {
  Alert,
  AlertTitle,
  Collapse,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { SignUpBtn } from "layouts/authentication/common/Buttons";
import { useState } from "react";
import { newPassword } from "api";

function Cover() {
  const [errors, setErrors] = useState({});
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [displayAlert, setDisplayAlert] = useState(false);
  const [errorRequest, setErrorRequest] = useState();
  const [successRequest, setSuccessRequest] = useState();
  const [loading, setLoading] = useState(false);

  //visibility of password
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlePasswordChange2 = (event) => {
    setPassword2(event.target.value);
  };

  //validate form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};
    if (!password) {
      errors.password = "Please enter a Password";
    } else if (password !== password2) {
      errors.password2 = "The two passwords do not match";
    } else {
      try {
        setLoading(true);
        const username = localStorage.getItem("username");
        const response = await newPassword(username, password);
        console.log(response.data);
        setLoading(false);
        setErrorRequest(null);

        setSuccessRequest(
          `Mot de passe changé avec succès, retounez à la page de connexion`
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
            New Password
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Créez un nouveau mot de passe
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox>
            <form onSubmit={handleSubmit}>
              <MDBox mb={4}>
                <TextField
                  className=""
                  id="password"
                  label="New password"
                  margin="normal"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  fullWidth
                  size="medium"
                  sx={{ marginTop: 1 }}
                  value={password}
                  onChange={handlePasswordChange}
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword}>
                          {showPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  className="mb-2"
                  id="password2"
                  label="Confirm password"
                  margin="normal"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  fullWidth
                  size="medium"
                  sx={{ marginTop: 1 }}
                  value={password2}
                  onChange={handlePasswordChange2}
                  error={!!errors.password2}
                  helperText={errors.password2}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword}>
                          {showPassword ? (
                            <VisibilityOffIcon />
                          ) : (
                            <VisibilityIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </MDBox>
              <SignUpBtn
                loading={loading}
                // loadingText="Login..."
                text="Valider"
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
                      ? "Une erreur s'est produite lors de la mise à jour du mot de passe. Veuillez réessayer plus tard!"
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
