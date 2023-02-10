import { Components } from "@mui/material";
import { fontFamily, fontSize } from "./typography";


declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    dark: true;
    grey: true;
  }

  interface ButtonPropsSizeOverrides {
    normal: true;
  }
}

export const components: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      html: { scrollBehavior: "smooth" },
      p: { lineHeight: 1.75 },
      button: { fontFamily, fontSize },
      ".MuiRating-sizeSmall": {
        fontSize: "20px",
      },
      a: {
        textDecoration: "none",
        color: "inherit",
      },
      ul: {
        margin: 0,
        padding: 0,
        listStyle: "none",
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: { zIndex: 0 },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: { borderRadius: 8 },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: { borderRadius: "8px" },
    },
  },
  MuiPagination: {
    defaultProps: {
      variant: "outlined",
      color: "primary",
    },
  },
};
