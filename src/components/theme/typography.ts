import type { ThemeOptions } from "@mui/material/styles";

export const typography: ThemeOptions["typography"] = {
  fontFamily:
    "var(--font-roboto-condensed), system-ui, -apple-system, sans-serif",
  h1: {
    fontFamily:
      "var(--font-newake), var(--font-roboto-condensed), system-ui, sans-serif",
    fontSize: "8rem",
    fontWeight: 400,
    "@media (max-width:600px)": {
      fontSize: "3rem",
    },
  },
  h2: {
    fontFamily:
      "var(--font-newake), var(--font-roboto-condensed), system-ui, sans-serif",
    fontSize: "2.5rem",
    fontWeight: 400,
    "@media (max-width:600px)": {
      fontSize: "2rem",
    },
  },
  h3: {
    fontFamily:
      "var(--font-newake), var(--font-roboto-condensed), system-ui, sans-serif",
    fontSize: "2rem",
    fontWeight: 400,
    "@media (max-width:600px)": {
      fontSize: "1.5rem",
    },
  },
  h4: {
    fontFamily:
      "var(--font-newake), var(--font-roboto-condensed), system-ui, sans-serif",
    fontSize: "1.5rem",
    fontWeight: 400,
    "@media (max-width:600px)": {
      fontSize: "1rem",
    },
  },
};
