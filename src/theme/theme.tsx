import { createMuiTheme } from "@material-ui/core/styles";
import { palette } from "./palette";
import { typography } from "./typography";
import { overrides } from "./overrides";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {}
  interface ThemeOptions {}
}
const theme = createMuiTheme({
  palette: palette,
  typography: typography,
  overrides: overrides
});
export default theme;
