import { css } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
import chroma from "chroma-js";

import { blue, deepOrange, red, indigo, grey } from "@material-ui/core/colors";
const colors = [blue, deepOrange, red, indigo, grey];

const breakpoints: any = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const color = colors[Math.floor(Math.random() * colors.length)];
const colorCode = 900;

export const secondaryMain = color[colorCode];
export const lineColor = chroma(secondaryMain).darken(2);
export const headerFooterBg = "white";
export const headerPadding = "1rem";
export const imageSize = "4rem";
export const headerHeight = `calc(${imageSize} + (2 * ${headerPadding}))`;

export const headerCollapseSize = "sm";
export const constraintSize = "md";

export function upTo(breakpoint: string | number, cssStyles: any = null) {
  return (...args: any[]) => {
    let breakingCSS: any;
    if (!cssStyles) {
      // @ts-ignore
      breakingCSS = css(...args);
    } else {
      breakingCSS = cssStyles;
    }

    return css`
      @media (max-width: ${(typeof breakpoint === "string" ? breakpoints[breakpoint] : breakpoint - 1) / 16}em) {
        ${breakingCSS};
      }
    `;
  };
}

export function downTo(breakpoint: string | number, cssStyles: any = null) {
  return (...args: any[]) => {
    let breakingCSS: any;
    if (!cssStyles) {
      // @ts-ignore
      breakingCSS = css(...args);
    } else {
      breakingCSS = cssStyles;
    }

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
    primary: {
      main: grey[800],
    },
    secondary: {
      main: secondaryMain,
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
      disableElevation: true,
    },
  },
});
