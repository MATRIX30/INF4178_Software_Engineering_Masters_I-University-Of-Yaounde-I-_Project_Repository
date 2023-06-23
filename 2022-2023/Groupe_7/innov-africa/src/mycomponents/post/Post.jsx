import "./post.css";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {
  AccordionSummary,
  Avatar,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { BsChat, BsHeart } from "react-icons/bs";
import {
  Delete,
  EditNotifications,
  HideImage,
  Menu,
} from "@mui/icons-material";
import icon from "assets/theme/components/icon";
import MDAvatar from "components/MDAvatar";

function SimpleAccordion({ desc, title }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={"+"}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>{desc}</AccordionDetails>
      </Accordion>
    </div>
  );
}

export default function Post({
  studentId,
  studentUsername,
  studentPhoto,
  title,
  category,
  date,
  description,
  image,
  userPhoto,
  userId,
  proId,
}) {
  const datt = new Date(date);
  const dat = `${datt.getDate()}/${datt.getMonth()}/${
    datt.getFullYear() + 1
  } ${datt.getHours()}:${datt.getMinutes()}`;
  // console.log(dat);

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const actions = [
    {
      name: "Modifier",
      icon: <EditNotifications />,
      onClick: () => {
        alert("modifier");
      },
    },
    {
      name: "Supprimer",
      icon: <Delete />,
      onClick: () => {
        alert("supprimer");
      },
    },
    {
      name: "Cacher",
      icon: <HideImage />,
      onClick: () => {
        alert("cacher");
      },
    },
  ];

  function SimpleDialog(props) {
    const { onClose, open, title } = props;

    const handleListItemClick = (value) => {
      onClose(value);
    };

    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{title}</DialogTitle>
        <List sx={{ pt: 0 }}>
          {actions.map((action) => (
            <ListItem disableGutters>
              <ListItemButton
                onClick={() => {
                  action.onClick();
                  handleListItemClick();
                }}
                key={action.name}
              >
                <ListItemAvatar>
                  <Avatar>{action.icon}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={action.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Dialog>
    );
  }

  return (
    <div className="post" id={category + proId}>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <MDAvatar
              src={studentPhoto}
              alt="profile-image"
              size="sm"
              shadow="sm"
            />
            {/* <Avatar>
              <img className="postProfileImg" src={studentPhoto} alt="" />
            </Avatar> */}

            <div className="deatilsdiv">
              <span className="postUsername">{studentUsername}</span>
              <span className="postWork">{category.toUpperCase()}</span>
            </div>
          </div>
          <div className="postTopRight">
            {/* <MoreVert /> */}
            <span className="postDate">{dat}</span>
            &emsp;
            <span onClick={handleClickOpen}>
              <Menu />
            </span>
            <SimpleDialog title={title} open={open} onClose={handleClose} />
          </div>
        </div>
        <div className="postdescription">
          <SimpleAccordion desc={description} title={title} />
        </div>
        {image && (
          <div className="postCenter">
            <img className="postImg" src={image} alt="" />
          </div>
        )}

        <div className="postBottom">
          <div className="postBottomLeft">
            <span className="itemselements">
              <BsHeart size={18} style={{ cursor: "pointer" }} /> 3
            </span>
            <span className="itemselements">
              <BsChat size={18} /> 2
            </span>
          </div>
        </div>
        <div className="postBottomRight">
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
              placeholder={"Write your comment !"}
              className="shareInputcomment"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
