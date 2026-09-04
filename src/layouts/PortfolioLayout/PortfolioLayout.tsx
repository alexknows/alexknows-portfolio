import React from "react";
import { makeStyles, Container, Theme } from "@material-ui/core";
import { Topbar, About, Footer } from "../../components";
import { useHistory } from "react-router-dom";
import { PagesConfig } from "../../config/AppConfiguration";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    "& main": {
      paddingTop: theme.spacing(5),
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(1)
      }
    }
  },
  content: {
    height: "100%",
    padding: theme.spacing(6, 10),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(6, 6)
    }
  }
}));

const PortfolioLayout = (props: any) => {
  const { children } = props;
  const history = useHistory();
  const pathname = history.location.pathname;
  const pathKey = (() => {
    if (pathname === "/") return "home";
    if (pathname.startsWith("/notes") || pathname.startsWith("/posts")) {
      return "notes";
    }
    if (
      pathname.startsWith("/work") ||
      pathname.startsWith("/past-projects")
    ) {
      return "work";
    }
    if (pathname.startsWith("/ecommerce") || pathname.startsWith("/commerce")) {
      return "commerce";
    }
    return pathname.slice(1).split("/")[0] || "home";
  })();
  const pageConfig = (PagesConfig as any)[pathKey];
  const { rootStyles = {}, containerStyles = {} } = pageConfig || {};
  const classes = useStyles();

  return (
    <div style={rootStyles} className={classes.root}>
      <Topbar />
      <h1>.</h1>
      <Container
        style={containerStyles}
        className={classes.content}
        maxWidth="md"
      >
        <About />
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  );
};

export default PortfolioLayout;
