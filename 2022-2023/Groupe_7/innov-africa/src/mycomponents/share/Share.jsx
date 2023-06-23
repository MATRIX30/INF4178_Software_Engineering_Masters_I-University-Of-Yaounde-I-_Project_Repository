import { Avatar, Button } from "@mui/material";
import "./share.css";
import { useContext, useRef, useState } from "react";
import { MdAddAPhoto, MdVideoCameraBack } from "react-icons/md";
import MDButton from "components/MDButton";
import { PostDialog } from "./PostDialog";
import Post from "mycomponents/post/Post";
import MDAvatar from "components/MDAvatar";

export default function Share({
  userId,
  userProfile,
  projects,
  setProjects,
  userPhoto,
}) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(userId);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  // const [file, setFile] = useState(null);
  const [desc, setDesc] = useState();
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(desc);
    // console.log(file);
    // const newPost = {
    //  // userId: user._id,
    //   desc: desc.current.value,
    // };
    // if (file) {
    //   const data = new FormData();
    //   const fileName = Date.now() + file.name;
    //   data.append("name", fileName);
    //   data.append("file", file);
    //   newPost.img = fileName;
    //   console.log(newPost);
    //   try {
    //     // await axios.post("/upload", data);
    //   } catch (err) {}
    // }
    // try {
    //   // await axios.post("/posts", newPost);
    //   window.location.reload();
    // } catch (err) {}
  };

  console.log(projects);

  // console.log("PROJECTS:" + projects);

  return (
    <>
      <div className="share">
        <div
          className="shareWrapper"
          // method="post"
          // encType="multipart/form-data"
          // onSubmit={submitHandler}
        >
          <div className="shareTop">
            <MDAvatar
              src={userPhoto}
              alt="profile-image"
              size="sm"
              shadow="sm"
            />
            {/* <Avatar>
              <img className="shareProfileImg" src={userPhoto} alt="" />
            </Avatar> */}

            <input
              placeholder={"Décrivez votre projet !"}
              className="shareInput"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="shareBottom">
            <div className="shareOptions">
              <label htmlFor="file" className="shareOption">
                <MdVideoCameraBack htmlColor="tomato" className="shareIcon" />
                <span className="shareOptionText">Video</span>
                {/* <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              /> */}
              </label>
              <div className="shareOption">
                <label htmlFor="file" className="shareOption">
                  <MdAddAPhoto htmlColor="blue" className="shareIcon" />
                  <span className="shareOptionText">Photo</span>
                  {/* <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  accept=".mp4,.avi"
                  onChange={(e) => setFile(e.target.files[0])}
                /> */}
                </label>
              </div>
            </div>
            <MDButton
              onClick={() => {
                handleOpen();
              }}
              component="button"
              variant="gradient"
              color="info"
              // fullWidth
            >
              New Project{" "}
            </MDButton>
            {/* <button className="shareButton">New post</button> */}
          </div>
        </div>
        <PostDialog
          userProfile={userProfile}
          userId={userId}
          setOpen={setOpen}
          open={open}
          userPhoto={userPhoto}
        />
      </div>
      {projects.map((project) => (
        <Post
          studentId={project.student.id}
          studentUsername={project.student.username}
          title={project.title}
          category={project.category}
          date={project.date_created}
          description={project.description}
          image={project.image}
          userPhoto={userPhoto}
          userId={userId}
          proId={project.id}
        />
      ))}
    </>
  );
}
