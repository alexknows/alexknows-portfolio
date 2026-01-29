import React from "react";
import {
  makeStyles,
  createStyles,
  AppBar,
  Toolbar,
  IconButton,
  Theme
} from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import AndroidIcon from "@material-ui/icons/AndroidSharp";
import AppleIcon from "@material-ui/icons/Apple";
import MemoryIcon from "@material-ui/icons/Memory";
import { NavLink as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    navigationIcons: {
      "& button": {
        marginRight: 10
      },
      margin: "auto"
    },
    icon: {
      fontSize: 32
    },
    active: {
      "& button": {
        color: theme.palette.primary.contrastText
      }
    }
  })
);
const Topbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <div className={classes.navigationIcons}>
            <RouterLink activeClassName={classes.active} to="/ios">
              <IconButton color="secondary" aria-label="delete">
                <AppleIcon className={classes.icon} />
              </IconButton>
            </RouterLink>
            <RouterLink activeClassName={classes.active} to="/android">
              <IconButton color="secondary" aria-label="delete">
                <AndroidIcon className={classes.icon} />
              </IconButton>
            </RouterLink>
            <RouterLink activeClassName={classes.active} to="/web">
              <IconButton color="secondary" aria-label="delete">
                <LanguageIcon className={classes.icon} />
              </IconButton>
            </RouterLink>
            <RouterLink activeClassName={classes.active} to="/ai">
              <IconButton color="secondary" aria-label="AI projects">
                <MemoryIcon className={classes.icon} />
              </IconButton>
            </RouterLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Topbar;
