"use client";

import { styled } from "@mui/material/styles";
import { colors } from "@/components/theme/colours";
import Dialog from "@mui/material/Dialog";

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogTitle-root": {
    backgroundColor: colors.background.dark,
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    backgroundColor: colors.background.dark,
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
    backgroundColor: colors.background.dark,
  },
  "& .MuiDialog-paper": {
    backgroundColor: colors.background.dark,
    maxWidth: "700px",
    width: "100%",
  },
  "& .MuiDialogContent-dividers": {
    width: "100%",
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },
}));
