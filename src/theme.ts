import { createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import grey from "@material-ui/core/colors/grey";

export const headerFooterBg = grey[50];
export const headerPadding = "1rem";
export const imageSize = "4rem";
export const headerHeight = `calc(${imageSize} + (2 * ${headerPadding}))`;

export default createMuiTheme({
  palette: {
    type: "light",
    secondary: {
      main: indigo[500],
    },
  },
  typography: {
    fontFamily: "Lato",
    htmlFontSize: 16,
    button: {
      textTransform: "none",
    },
  },
  props: {
    MuiTextField: {
      variant: "outlined",
    },
    MuiLink: {
      underline: "hover",
      color: "secondary",
    },
    MuiButton: {
      variant: "contained",
      color: "primary",
      disableElevation: true,
      size: "large",
    },
  },
});
