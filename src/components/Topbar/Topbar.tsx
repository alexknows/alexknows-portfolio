import React from "react";
import { makeStyles, createStyles, AppBar, Toolbar, Theme } from "@material-ui/core";
import SiteNav from "../SiteNav";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    toolbar: {
      minHeight: 64,
    },
  })
);

const Topbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <SiteNav tone="bar" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Topbar;
