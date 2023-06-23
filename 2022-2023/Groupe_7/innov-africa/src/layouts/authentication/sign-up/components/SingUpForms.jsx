import {
  TextField,
  IconButton,
  InputAdornment,
  Alert,
  AlertTitle,
  Collapse,
  FormHelperText,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { SignUpBtn } from "layouts/authentication/common/Buttons";
import { signup } from "api";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

/////////// by admin (ajouter un directeur) ///////////////////////

export const ByAdmin = ({ pColor, profileId, profile }) => {
  const levels = [
    {
      id: 1,
      name: "BAC + 1",
    },
    {
      id: 2,
      name: "BAC + 2",
    },
    {
      id: 3,
      name: "BAC + 3",
    },
    {
      id: 3,
      name: "BAC + 4",
    },
    {
      id: 3,
      name: "BAC + 5",
    },
    {
      id: 3,
      name: "BAC + 6",
    },
    {
      id: 3,
      name: "BAC + 7",
    },
    {
      id: 3,
      name: "BAC +8",
    },
  ];
  const [level, setLevel] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  //visibility of password
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  console.log(profileId);
  console.log(profile);

  const [displayAlert, setDisplayAlert] = useState(true);
  const [errorRequest, setErrorRequest] = useState();
  const [successRequest, setSuccessRequest] = useState();
  const [loading, setLoading] = useState(false);

  // validate form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};
    if (!level) {
      errors.level = "Please enter a school level";
    } else if (!phone) {
      errors.phone = "Please enter a phone number";
    } else if (!email) {
      errors.email = "Please enter an email address";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address";
    } else if (!password) {
      errors.password = "Please enter a password";
    } else {
      try {
        setLoading(true);
        const body = {
          level: level,
          username: email,
          password: password,
          phone: phone,
          profile: profileId,
        };
        const response = await signup(body);
        console.log(response.data);

        setLoading(false);
        setErrorRequest(null);
        setSuccessRequest(
          `${email} a été ajouté(e) avec success comme "${profile.toUpperCase()}".`
        );
        setDisplayAlert(true);

        // reset inputs form
        setPhone("");
        setEmail("");
        setPassword("");
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
    <form className="mt-4" id="contact-form" onSubmit={handleSubmit}>
      <FormControl fullWidth sx={{ marginBottom: 2 }} error={!!errors.level}>
        <InputLabel id="centers_label">Niveau d'études</InputLabel>
        <Select
          sx={{ height: 45 }}
          labelId="level_label"
          id="level"
          value={level}
          label="Niveau d'études"
          onChange={(e) => setLevel(e.target.value)}
        >
          {levels.map((option) => (
            <MenuItem value={option.name}>{option.name}</MenuItem>
          ))}
        </Select>
        <FormHelperText>{errors.level}</FormHelperText>
      </FormControl>

      <TextField
        label="Numéro de téléphone"
        type="tel"
        size="medium"
        fullWidth
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        error={!!errors.phone}
        helperText={errors.phone}
      />
      <TextField
        sx={{ marginTop: 2 }}
        label="Adresse Email"
        type="email"
        size="medium"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        id="password"
        label="Mot de passe"
        margin="normal"
        type={showPassword ? "text" : "password"}
        variant="outlined"
        fullWidth
        size="medium"
        sx={{ marginTop: 2, marginBottom: 2 }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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

      {/* request error */}
      {errorRequest && (
        <Collapse in={displayAlert}>
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
              ? "Un compte avec cette adresse email existe déja !"
              : "Une erreur s'est produite lors de la connexion. Veuillez réessayer plus tard!"}
          </Alert>
        </Collapse>
      )}
      {/* request succes */}
      {successRequest && (
        <Collapse in={displayAlert}>
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
      <div className="mt-3">
        <SignUpBtn
          disable={profileId === null}
          text="Enregistrer"
          loading={loading}
          // loadingText="registering..."
          color={pColor}
        />
      </div>
    </form>
  );
};

///////////////// by director (ajouter un personnel) ////////////////

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

export const ByDirector = ({ pColor, profileId, profile }) => {
  const services = [
    {
      id: 1,
      name: "Examens de la charge virale",
    },
    {
      id: 2,
      name: "Suivi des femmes enceintes et des enfants exposés",
    },
    {
      id: 3,
      name: "Gestion des stocks de produits",
    },
  ];

  const [phone, setPhone] = useState("");
  const [service, setService] = useState([]);
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("vih-ctr");
  const [errors, setErrors] = useState({});

  //visibility of password
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // select multiple
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setService(typeof value === "string" ? value.split(",") : value);
  };

  const [displayAlert, setDisplayAlert] = useState(true);
  const [errorRequest, setErrorRequest] = useState();
  const [successRequest, setSuccessRequest] = useState();
  const [loading, setLoading] = useState(false);

  // validate form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};
    if (!phone) {
      errors.phone = "Please enter a phone number";
    } else if (phone.trim().length < 12 || phone.trim().length > 12) {
      errors.phone = "Enter a correct phone number";
    } else if (!service || service.length === 0) {
      errors.service = "Please choose a service";
    } else if (!email) {
      errors.email = "Please enter an email address";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address";
    } else if (!password) {
      errors.password = "Please enter a password";
    } else {
      try {
        setLoading(true);
        const body = {
          phone: phone,
          username: email,
          password: password,
          profile: profileId,
          service: service,
        };
        const response = await signup(body);
        console.log(response.data);

        setLoading(false);
        setErrorRequest(null);
        setSuccessRequest(
          `${email} a été ajouté(e) avec success comme "${profile.toUpperCase()}".`
        );
        setDisplayAlert(true);

        // reset inputs form
        setPhone("");
        setService("");
        setEmail("");
        setPassword("");
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
    <form className="mt-4" id="contact-form" onSubmit={handleSubmit}>
      <TextField
        label="Numéro de téléphone (avec 237)"
        type="tel"
        size="medium"
        fullWidth
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        error={!!errors.phone}
        helperText={errors.phone}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {phone && `${phone.trim().length} / 12`}
            </InputAdornment>
          ),
        }}
      />

      {/* <TextField
        sx={{ marginTop: 2 }}
        fullWidth
        size="medium"
        select
        value={service}
        onChange={(e) => setService(e.target.value)}
        error={!!errors.service}
        helperText={errors.service}
        SelectProps={{
          native: true,
        }}
      >
        <option>Service concerné</option>
        {services.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </TextField> */}

      <FormControl fullWidth sx={{ marginTop: 2 }} error={!!errors.service}>
        <InputLabel id="services_label">Service.s concerné.s</InputLabel>
        <Select
          disabled
          sx={{ height: 45 }}
          labelId="services_label"
          id="services"
          multiple
          value={service}
          label="Service.s concerné.s"
          onChange={handleChange}
          renderValue={(selected) => selected.join(", ")}
          // MenuProps={MenuProps}
        >
          {services.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              <Checkbox checked={service.indexOf(option.id) > -1} />
              {/* <ListItemText primary={option.name} /> */}
              {option.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{errors.service}</FormHelperText>
      </FormControl>

      <TextField
        sx={{ marginTop: 2 }}
        label="Adresse Email"
        type="email"
        size="medium"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        id="password"
        label="Mot de passe"
        margin="normal"
        type={showPassword ? "text" : "password"}
        variant="outlined"
        fullWidth
        size="medium"
        sx={{ marginTop: 2, marginBottom: 2 }}
        value={"vih-ctr"}
        onChange={(e) => setPassword(e.target.value)}
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

      {/* request error */}
      {errorRequest && (
        <Collapse in={displayAlert}>
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
              ? "Un compte avec cette adresse email existe déja !"
              : "Une erreur s'est produite lors de la connexion. Veuillez réessayer plus tard!"}
          </Alert>
        </Collapse>
      )}
      {/* request succes */}
      {successRequest && (
        <Collapse in={displayAlert}>
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

      <div className="mt-3">
        <SignUpBtn
          disable={profileId === null}
          text="Enregistrer"
          loading={loading}
          // loadingText="registering..."
          color={pColor}
        />
      </div>
    </form>
  );
};

///////// by Super Admin (ajouter les autres type de compte [admin, decideur, etc...]) //////////////////////

export const BySuperAdmin = ({ pColor, profileId, profile }) => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  //visibility of password
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  console.log(profileId);
  console.log(profile);

  const [displayAlert, setDisplayAlert] = useState(true);
  const [errorRequest, setErrorRequest] = useState();
  const [successRequest, setSuccessRequest] = useState();
  const [loading, setLoading] = useState(false);

  // validate form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};
    if (!phone) {
      errors.phone = "Please enter a phone number";
    } else if (!email) {
      errors.email = "Please enter an email address";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address";
    } else if (!password) {
      errors.password = "Please enter a password";
    } else {
      try {
        setLoading(true);
        const body = {
          username: email,
          password: password,
          phone: phone,
          profile: profileId,
        };
        const response = await signup(body);
        console.log(response.data);

        setLoading(false);
        setErrorRequest(null);
        setSuccessRequest(
          `${email} a été ajouté(e) avec success comme "${profile.toUpperCase()}".`
        );
        setDisplayAlert(true);

        // reset inputs form
        setPhone("");
        setEmail("");
        setPassword("");
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
    <form className="mt-4" id="contact-form" onSubmit={handleSubmit}>
      <TextField
        label="Numéro de téléphone"
        type="tel"
        size="medium"
        fullWidth
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        error={!!errors.phone}
        helperText={errors.phone}
      />
      <TextField
        sx={{ marginTop: 2 }}
        label="Adresse Email"
        type="email"
        size="medium"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        id="password"
        label="Mot de passe"
        margin="normal"
        type={showPassword ? "text" : "password"}
        variant="outlined"
        fullWidth
        size="medium"
        sx={{ marginTop: 2, marginBottom: 2 }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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

      {/* request error */}
      {errorRequest && (
        <Collapse in={displayAlert}>
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
              ? "Un compte avec cette adresse email existe déja !"
              : "Une erreur s'est produite lors de la connexion. Veuillez réessayer plus tard!"}
          </Alert>
        </Collapse>
      )}
      {/* request succes */}
      {successRequest && (
        <Collapse in={displayAlert}>
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
      <div className="mt-3">
        <SignUpBtn
          disable={profileId === null}
          text="Enregistrer"
          loading={loading}
          // loadingText="registering..."
          color={pColor}
        />
      </div>
    </form>
  );
};
