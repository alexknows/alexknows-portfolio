import React from "react";
import {
  makeStyles,
  createStyles,
  Toolbar,
  IconButton,
  Theme
} from "@material-ui/core";

import LanguageIcon from "@material-ui/icons/Language";
import AndroidIcon from "@material-ui/icons/AndroidSharp";
import AppleIcon from "@material-ui/icons/Apple";
import MemoryIcon from "@material-ui/icons/Memory";
import BuildIcon from "@material-ui/icons/Build";
import { NavLink as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(4, 0, 0, 0),
      paddingBottom: theme.spacing(4)
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
        color: theme.palette.primary.main
      }
    }
  })
);
const Footer = () => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.root}>
      <div className={classes.navigationIcons}>
        <RouterLink activeClassName={classes.active} to="/ai">
          <IconButton color="secondary" aria-label="AI">
            <MemoryIcon className={classes.icon} />
          </IconButton>
        </RouterLink>
        <RouterLink activeClassName={classes.active} to="/tools">
          <IconButton color="secondary" aria-label="Tools">
            <BuildIcon className={classes.icon} />
          </IconButton>
        </RouterLink>
        <RouterLink activeClassName={classes.active} to="/ios">
          <IconButton color="secondary" aria-label="iOS">
            <AppleIcon className={classes.icon} />
          </IconButton>
        </RouterLink>
        <RouterLink activeClassName={classes.active} to="/android">
          <IconButton color="secondary" aria-label="Android">
            <AndroidIcon className={classes.icon} />
          </IconButton>
        </RouterLink>
        <RouterLink activeClassName={classes.active} to="/web">
          <IconButton color="secondary" aria-label="Web">
            <LanguageIcon className={classes.icon} />
          </IconButton>
        </RouterLink>
      </div>
    </Toolbar>
  );
};

export default Footer;
