import React from "react";
import { makeStyles, createStyles, Toolbar, Theme } from "@material-ui/core";
import SiteNav from "../SiteNav";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(4, 0, 0, 0),
      paddingBottom: theme.spacing(4),
    },
  })
);

const Footer = () => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.root}>
      <SiteNav tone="footer" />
    </Toolbar>
  );
};

export default Footer;
