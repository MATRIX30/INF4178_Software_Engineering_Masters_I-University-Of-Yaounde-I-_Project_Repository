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
import { update } from "api";

export const UpdateForm = ({
  pColor,
  lastNameUser,
  profileId,
  firstNameUser,
  addressUser,
  emailUser,
  phoneUser,
  levelUser,
}) => {
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
  const [level, setLevel] = useState(levelUser);
  const [phone, setPhone] = useState(phoneUser);
  const [email, setEmail] = useState(emailUser);
  const [lastname, setLastName] = useState(lastNameUser);
  const [firstName, setFirstName] = useState(firstNameUser);
  const [address, setAddress] = useState(addressUser);
  const [errors, setErrors] = useState({});

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
    } else {
      try {
        setLoading(true);
        const body = {
          level: level,
          username: email,
          phone: phone,
          last_name: lastname,
          first_name: firstName,
          address: address,
          level: level,
          // profile: profileId,
        };
        const response = await update(body, profileId);
        console.log(response.data);

        setLoading(false);
        setErrorRequest(null);
        setSuccessRequest(`${email} a été mis à jour avec succès.`);
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
    <form className="" id="contact-form" onSubmit={handleSubmit}>
      {levelUser && (
        <FormControl fullWidth sx={{ marginBottom: 2 }} error={!!errors.level}>
          <InputLabel id="centers_label">{levelUser}</InputLabel>
          <Select
            sx={{ height: 45 }}
            labelId="level_label"
            id="level"
            value={level}
            label={levelUser}
            onChange={(e) => setLevel(e.target.value)}
          >
            {levels.map((option) => (
              <MenuItem value={option.name}>{option.name}</MenuItem>
            ))}
          </Select>
          <FormHelperText>{errors.level}</FormHelperText>
        </FormControl>
      )}

      <TextField
        label="Numéro de téléphone"
        placeholder={phoneUser}
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
        sx={{ marginTop: 2 }}
        label="Adresse"
        placeholder={addressUser}
        type="text"
        size="medium"
        fullWidth
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <TextField
        sx={{ marginTop: 2 }}
        label="Prénoms"
        placeholder={firstNameUser}
        type="text"
        size="medium"
        fullWidth
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        sx={{ marginTop: 2, marginBottom: 2 }}
        label="Noms"
        placeholder={lastNameUser}
        type="text"
        size="medium"
        fullWidth
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
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
