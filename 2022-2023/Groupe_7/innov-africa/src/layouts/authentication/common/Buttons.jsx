import { Button } from "@mui/material";

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

import React from "react";
import { LoadingButton } from "@mui/lab";

export const UserBtn = ({
  type,
  selType,
  text,
  icon,
  color,
  onclickAction,
}) => {
  return (
    <Button
      size="small"
      sx={
        type === selType
          ? {
              //padding: "7px 15px",s
              borderRadius: "7px",
              backgroundColor: color,
              color: "#fff",
              ":hover": { color: `${color}` },
              "&:focus": { backgroundColor: `${color}`, color: "#fff" },
              border: `1px solid ${color}`,
            }
          : {
              // padding: "7px 15px",
              borderRadius: "7px",
              backgroundColor: "none",
              color: `${color}`,
              border: `1px solid ${color}`,
              opacity: 0.5,
            }
      }
      startIcon={icon}
      onClick={onclickAction}
    >
      {text}
    </Button>
  );
};

export const SingleUserBtn = ({ text, icon, color, onclickAction }) => {
  return (
    <Button
      sx={{
        padding: "7px 25px",
        borderRadius: "30px",
        backgroundColor: "none",
        color: `${color}`,
        border: `1px solid ${color}`,
      }}
      startIcon={icon}
      onClick={onclickAction}
    >
      {text}
    </Button>
  );
};

export const SignUpBtn = ({
  text,
  icon,
  color,
  variant,
  loading,
  loadingText,
  disable,
}) => {
  return (
    <LoadingButton
      disabled={disable}
      loading={loading}
      loadingIndicator={loadingText}
      className="w-100"
      size="large"
      type="submit"
      sx={{
        backgroundColor: color,
        color: "#fff",
        ":hover": { color: `var(--white)`, backgroundColor: `${color}` },
        border: `1px solid ${color}`,
      }}
      endIcon={icon}
      variant={variant}
    >
      {text}
    </LoadingButton>
  );
};

export const ButtonGlobal = ({
  type,
  variant,
  fullWidth,
  sx,
  color,
  backgroundColor,
  borderRadius,
  onClick,
  children,
}) => {
  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor || `var(--primaryColor)`,
    borderRadius: borderRadius || 5,
    color: color || "white",
    width: fullWidth ? "100%" : "auto",
    "&:hover": {
      backgroundColor: backgroundColor || `var(--primaryColor)`,
      color: color || "white",
    },
  }));

  return (
    <StyledButton
      type={type}
      variant={variant}
      fullWidth={fullWidth}
      sx={sx}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

ButtonGlobal.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  fullWidth: PropTypes.bool,
  sx: PropTypes.object,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.number,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

ButtonGlobal.defaultProps = {
  type: "submit",
  variant: "contained",
  fullWidth: true,
  sx: {},
  color: "primaryColor",
  backgroundColor: "",
  borderRadius: 0,
  onClick: () => {},
};
