import { css } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import grey from "@material-ui/core/colors/grey";

export const lineColor = grey[400];
export const headerFooterBg = grey[50];
export const headerPadding = "1rem";
export const imageSize = "4rem";
export const headerHeight = `calc(${imageSize} + (2 * ${headerPadding}))`;

const breakpoints: any = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export function upTo(breakpoint: string | number) {
  return (...args: any[]) => {
    // @ts-ignore
    const breakingCSS = css(...args);
    return css`
      @media (max-width: ${(typeof breakpoint === "string" ? breakpoints[breakpoint] : breakpoint - 1) / 16}em) {
        ${breakingCSS};
      }
    `;
  };
}

export function downTo(breakpoint: string | number) {
  return (...args: any[]) => {
    // @ts-ignore
    const breakingCSS = css(...args);
    return css`
      @media (min-width: ${(typeof breakpoint === "string" ? breakpoints[breakpoint] : breakpoint + 1) / 16}em) {
        ${breakingCSS};
      }
    `;
  };
}

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
