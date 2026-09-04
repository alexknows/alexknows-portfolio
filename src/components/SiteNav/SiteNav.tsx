import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
import { siteNav } from "../../config/siteNav";

interface SiteNavProps {
  tone: "bar" | "footer";
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    gap: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      gap: theme.spacing(2),
    },
  },
  link: {
    fontFamily: "Helvetica, Roboto, sans-serif",
    fontSize: 15,
    fontWeight: 500,
    letterSpacing: "0.04em",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
    },
  },
  bar: {
    color: "#ffffff",
    "&:hover": {
      color: "#ffffff",
      textDecoration: "underline",
    },
  },
  footer: {
    color: theme.palette.text.secondary,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  barActive: {
    color: theme.palette.primary.contrastText,
    fontWeight: 700,
  },
  footerActive: {
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
}));

const isItemActive = (pathname: string, item: typeof siteNav[number]) => {
  if (item.exact) {
    return pathname === item.to;
  }
  if (item.matchPrefixes) {
    return item.matchPrefixes.some(
      (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
    );
  }
  return pathname === item.to || pathname.startsWith(`${item.to}/`);
};

const SiteNav = ({ tone }: SiteNavProps) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <nav className={classes.root} aria-label="Primary">
      {siteNav.map((item) => {
        const active = isItemActive(pathname, item);
        const toneClass = tone === "bar" ? classes.bar : classes.footer;
        const activeClass =
          tone === "bar" ? classes.barActive : classes.footerActive;
        return (
          <RouterLink
            key={item.to}
            to={item.to}
            className={`${classes.link} ${toneClass} ${
              active ? activeClass : ""
            }`}
          >
            {item.label}
          </RouterLink>
        );
      })}
    </nav>
  );
};

export default SiteNav;
