import { TypographyOptions } from "@material-ui/core/styles/createTypography";
import { palette } from "./palette";
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme();

export const typography: TypographyOptions = {
  fontFamily: ["Helvetica", "Roboto"].join(","),
  h1: {
    color: palette?.text?.primary,
    fontWeight: 700,
    letterSpacing: "normal",
    fontSize: "19px",
    [theme?.breakpoints.down("sm")]: {
      fontSize: "15px"
    }
  },
  h2: {
    color: palette?.text?.secondary,
    fontWeight: 400,
    letterSpacing: "normal",
    fontSize: "19px",
    [theme?.breakpoints.down("sm")]: {
      fontSize: "15px"
    }
  },
  body1: {
    color: palette?.text?.secondary,
    fontWeight: 400,
    lineHeight: "normal",
    fontSize: "16px",
    [theme?.breakpoints.down("sm")]: {
      fontSize: "12px"
    }
  },
  body2: {
    color: palette?.text?.secondary,
    fontWeight: 400,
    fontSize: "13px",
    [theme?.breakpoints.down("sm")]: {
      fontSize: "12px"
    }
  }
};
