import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  Collapse
} from "@material-ui/core";
import AppConfig from "../../config/AppConfiguration";
import theme from "../../theme";
const useStyles = makeStyles(() => ({
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
  seeMoreButton: {
    fontFamily: "Roboto",
    color: "blue",
    fontWeight: 500,
    alignSelf: "flex-end"
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
          <Button
            style={{ textTransform: "none" }}
            className={classes.seeMoreButton}
          >
            <button
              onClick={event => {
                event.preventDefault();
                setSeeMore(!seeMore);
              }}
            >
              {seeMore ? "see less" : "see more"}
            </button>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
