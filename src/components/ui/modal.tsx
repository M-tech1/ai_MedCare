import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ReactNode, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

export interface IModalProps {
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
  title?: string;
  message?: string;
  width?: "sm" | "xs" | "md" | "lg" | "xl";
  removePadding?: boolean;
}

export default function Modal({
  open,
  handleClose,
  children,
  title,
  message,
  width,
  removePadding,
}: IModalProps) {
  return (
    <Dialog
      fullWidth
      open={open}
      maxWidth={width || "sm"}
      onClose={handleClose}
      sx={{ zIndex: 999 }}
    >
      {title ? (
        <DialogTitle className=" w-full font-yrsa text-2xl text-center capitalize ">
          <div className="pb-6">
            {title}
            <p className="text-sm">{message}</p>
          </div>
          <button
            className="absolute right-10 top-5 text-red-600"
            onClick={handleClose}
          >
            <IoCloseCircleOutline />
          </button>
        </DialogTitle>
      ) : null}

      <DialogContent sx={{ padding: removePadding ? 0 : "1rem" }}>
        {children}
      </DialogContent>
    </Dialog>
  );
}
