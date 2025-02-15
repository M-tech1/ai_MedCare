import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ReactNode } from "react";

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
        <DialogTitle className=" w-full text-center text-lg capitalize ">
          <div className="pb-6">
            {title}
            <p className="text-sm">{message}</p>
          </div>
        </DialogTitle>
      ) : null}

      <DialogContent sx={{ padding: removePadding ? 0 : "2rem" }}>
        {children}
      </DialogContent>
    </Dialog>
  );
}
