import React, { useState } from "react";
import axios from "axios";
import {
  Alert,
  AlertTitle,
  Button,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { createPost } from "api";
import MDButton from "components/MDButton";
import { MdAddAPhoto } from "react-icons/md";
import { ResetTv } from "@mui/icons-material";

export const PostDialog = ({
  userProfile,
  userId,
  open,
  setOpen,
  projects,
  setProjects,
  userPhoto,
}) => {
  const categories = [
    {
      id: 1,
      name: "Informatique",
    },
    {
      id: 2,
      name: "Commerce",
    },
    {
      id: 3,
      name: "Santé",
    },
    {
      id: 4,
      name: "Autres",
    },
  ];

  const [student, setStudent] = useState(userId);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };
  const handleRemoveImage = (event) => {
    setImage(null);
    setPreviewImage(null);
  };

  const [errors, setErrors] = useState({});
  const [displayAlert, setDisplayAlert] = useState(true);
  const [errorRequest, setErrorRequest] = useState();
  const [loading, setLoading] = useState(false);

  // validate form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};
    if (!title) {
      errors.title = "Please enter a project title";
    } else if (!category) {
      errors.category = "Please choose a project category";
    } else if (!description) {
      errors.description = "Please describe your project";
    } else {
      const formData = new FormData();
      formData.append("student", student);
      formData.append("title", title);
      formData.append("category", category);
      formData.append("description", description);
      if (image !== null) {
        formData.append("image", image);
      }

      try {
        setLoading(true);
        const response = await createPost(formData);
        console.log(response.data);

        // add project in list
        const projectsTemp = projects;
        projectsTemp.add(response.data);
        setProjects(projectsTemp);

        setLoading(false);
        setErrorRequest(null);
        setDisplayAlert(true);

        // reset inputs form
        setTitle("");
        setCategory("");
        setDescription("");
        handleRemoveImage();

        // fermer le modal
        handleClose();
      } catch (error) {
        setLoading(false);
        setErrorRequest(error);
        setDisplayAlert(true);
        console.log(error);
      }
    }
    setErrors(errors);
  };

  const handleClose = () => setOpen(false);

  // const datt = new Date("2023-06-16T12:06:43.223913Z");
  // const dat = `${datt.getDate()}/${datt.getMonth()}/${
  //   datt.getFullYear() + 1
  // } ${datt.getHours()}:${datt.getMinutes()}`;
  // console.log(dat);
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Ajouter un projet</DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit}
            method="post"
            encType="multipart/form-data"
          >
            {userProfile !== "student" ? (
              <Alert
                onClose={() => {
                  setDisplayAlert(false);
                }}
                className="w-100 text-start"
                severity={"warning"}
              >
                <AlertTitle>{"Warning"}</AlertTitle>
                Vous n'êtes pas connecté.e en tant que STUDENT.
              </Alert>
            ) : (
              ""
            )}
            {/* request error */}
            {errorRequest && (
              <Collapse in={displayAlert}>
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
                    ? "Une erreur s'est produite lors de l'ajout de votre projet! "
                    : "Une erreur s'est produite lors de la connexion. Veuillez réessayer plus tard!"}
                </Alert>
              </Collapse>
            )}

            <TextField
              sx={{ marginTop: 2 }}
              label="Titre du projet"
              type="text"
              size="medium"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              error={!!errors.title}
              helperText={errors.title}
            />
            <FormControl
              fullWidth
              sx={{ marginTop: 2 }}
              error={!!errors.category}
            >
              <InputLabel id="centers_label">Formation sannitaire</InputLabel>
              <Select
                sx={{ height: 45 }}
                labelId="centers_label"
                id="centers"
                value={category}
                label="Formation sannitaire"
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((option) => (
                  <MenuItem value={option.name}>{option.name}</MenuItem>
                ))}
              </Select>
              <FormHelperText>{errors.category}</FormHelperText>
            </FormControl>
            <TextField
              sx={{ marginTop: 2 }}
              label="Description"
              type="text"
              size="medium"
              multiline
              maxRows={4}
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              error={!!errors.description}
              helperText={errors.description}
            />

            {previewImage && (
              <div
                className="mt-3"
                style={{
                  height: "200px",
                  width: "250px",
                  overflow: "hidden",
                  borderRadius: "15px",
                }}
              >
                <img
                  src={previewImage}
                  alt="Preview"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            )}
            <div className="d-flex justify-content-end text-end mb-1 mt-3">
              {previewImage ? (
                <span onClick={handleRemoveImage} className="shareOption">
                  <ResetTv size={20} />
                  <span className="fs-6"> Remove image</span>
                </span>
              ) : (
                <label htmlFor="file" className="shareOption">
                  <MdAddAPhoto
                    size={20}
                    htmlColor="blue"
                    className="shareIcon"
                  />
                  <span className="fs-6">Add image</span>
                  <input
                    style={{ display: "none" }}
                    type="file"
                    id="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </label>
              )}
            </div>
            <DialogActions sx={{ mb: 0, pb: 0 }}>
              <Button onClick={handleClose} color="primary">
                Annuler
              </Button>
              <MDButton
                component="button"
                variant="gradient"
                color="info"
                type="submit"
              >
                Ajouter
              </MDButton>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
