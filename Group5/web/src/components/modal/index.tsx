import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

type ModalProps = {
  children?: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

export default function ModalContainer({
  open,
  onClose,
  children,
}: ModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  minHeight: 200,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  borderRadius: 4,
  p: 0,
};
