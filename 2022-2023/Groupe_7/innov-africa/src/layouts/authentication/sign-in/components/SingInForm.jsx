import { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Alert,
  AlertTitle,
  Collapse,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { login } from "api";
import { SignUpBtn } from "layouts/authentication/common/Buttons";

export const SignInForm = () => {
  //visibility of password
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const [displayAlert, setDisplayAlert] = useState(false);
  const [errorRequest, setErrorRequest] = useState();
  const [successRequest, setSuccessRequest] = useState();
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  //validate form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};
    if (!email) {
      errors.email = "Please enter your Email address";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!password) {
      errors.password = "Please enter a Password";
    } else {
      try {
        setLoading(true);
        const response = await login(email, password);
        // console.log(response.data);
        // const res = await getUser(response.data.token);
        // console.log(res.data);

        // save user token
        localStorage.setItem("token", response.data.token);
        localStorage.setItem(
          "currentuser",
          JSON.stringify(response.data.currentuser)
        );

        // save current account
        // localStorage.setItem("account", JSON.stringify(res.data));

        setLoading(false);
        setErrorRequest(null);

        setSuccessRequest(`Bienvenue Mr/Mme ${email} !`);
        setDisplayAlert(true);

        navigate("/accueil");
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
    <>
      <form onSubmit={handleSubmit}>
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
        <TextField
          className="mt-2 mb-4"
          id="password"
          label="Password"
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
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <SignUpBtn
          loading={loading}
          // loadingText="Login..."
          text="Login"
          color="var(--primaryColor)"
          variant="contained"
        />
      </form>

      {/* request error */}
      {errorRequest && (
        <Collapse className="w-100 mt-4" in={displayAlert}>
          <Alert
            onClose={() => {
              setDisplayAlert(false);
            }}
            className="w-100 text-start"
            severity={
              errorRequest.code === "ERR_BAD_REQUEST" ? "error" : "warning"
            }
          >
            <AlertTitle>
              {errorRequest.code === "ERR_BAD_REQUEST" ? "Error" : "Warning"}
            </AlertTitle>
            {errorRequest.code === "ERR_BAD_REQUEST"
              ? "Adresse email ou mot de passe incorrect. Veuillez réessayer!"
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
    </>
  );
};
