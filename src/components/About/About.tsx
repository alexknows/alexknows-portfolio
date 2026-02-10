import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Collapse,
  IconButton
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import AppConfig from "../../config/AppConfiguration";
import theme from "../../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%"
  },
  content: {
    paddingTop: 64,
    height: "100%"
  },
  textArea: {
    flex: 1,
    marginTop: theme.spacing(1)
  },
  readMoreLink: {
    fontFamily: "Roboto",
    color: theme.palette.text.secondary,
    fontWeight: 400,
    fontSize: "0.9rem",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    display: "inline-block",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main
    }
  },
  linkIcons: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    marginTop: 8
  },
  linkIcon: {
    padding: 6,
    "& svg": {
      width: 20,
      height: 20
    },
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
      "& svg": {
        color: theme.palette.primary.main
      }
    }
  }
}));

const About = (props: any) => {
  const { about } = AppConfig;
  const [seeMore, setSeeMore] = useState(false);
  const { seeMoreText } = about;
  const classes = useStyles();
  return (
    <Grid style={{ marginTop: 15 }} direction="row" spacing={2} container>
      <Grid xs={12} md={"auto"} item>
        <img
          src={require("../../assets/images/PortfolioLayout/alex.png")}
          alt=""
        />
      </Grid>
      <Grid
        xs={12}
        md={"auto"}
        className={classes.textArea}
        spacing={4}
        item
        container
      >
        <Grid item>
          <Typography variant="h1">{about.title}</Typography>
          <Typography variant="h2">{about.subtitle}</Typography>
          <div className={classes.linkIcons}>
            <IconButton
              className={classes.linkIcon}
              component="a"
              href="mailto:cruzbiz11@gmail.com"
              aria-label="Email"
              color="secondary"
              size="small"
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              className={classes.linkIcon}
              component="a"
              href="https://github.com/alexknows"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              color="secondary"
              size="small"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </IconButton>
            <IconButton
              className={classes.linkIcon}
              component="a"
              href="https://www.linkedin.com/in/alexknows/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              color="secondary"
              size="small"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </IconButton>
            <IconButton
              className={classes.linkIcon}
              component="a"
              href="https://x.com/alexknowsbiz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              color="secondary"
              size="small"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </IconButton>
          </div>
        </Grid>
        <Grid container dir="column" item>
          <Typography variant="body1">{about.text}</Typography>
          <Collapse in={seeMore}>
            {seeMoreText.map((text, index) => (
              <Typography
                style={{ margin: "10px 0 10px 0" }}
                key={index}
                variant="body1"
              >
                {text}
              </Typography>
            ))}
          </Collapse>
          <Typography
            component="span"
            className={classes.readMoreLink}
            onClick={() => setSeeMore(!seeMore)}
          >
            {seeMore ? "read less" : "read more"}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
