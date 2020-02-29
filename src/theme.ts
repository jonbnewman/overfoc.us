import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import lightBlue from '@material-ui/core/colors/lightBlue';

export const headerPadding = '1rem';
export const imageSize = '4rem';
export const headerHeight = `calc(${imageSize} + (2 * ${headerPadding}))`;

export default createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: grey[900],
    },
    secondary: {
      main: lightBlue[700],
    },
  },
  typography: {
    fontFamily: 'Lato',
    htmlFontSize: 16,
    button: {
      textTransform: 'none',
    },
  },
  props: {
    MuiTextField: {
      variant: 'outlined',
    },
    MuiLink: {
      underline: 'hover',
      color: 'secondary',
    },
    MuiButton: {
      variant: 'contained',
      color: 'primary',
      disableElevation: true,
      size: 'large',
    },
  },
});
