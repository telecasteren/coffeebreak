"use client";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogTitle-root": {
    backgroundColor: theme.palette.background.dialog,
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.dialog,
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.dialog,
  },
  "& .MuiDialog-paper": {
    backgroundColor: theme.palette.background.dialog,
    maxWidth: "700px",
    width: "100%",
  },
  "& .MuiDialogContent-dividers": {
    width: "100%",
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },
  ".mui-102onwa-MuiButtonBase-root-MuiButton-root": {
    color: theme.palette.text.primary,
  },
}));
