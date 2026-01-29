import React, { FunctionComponent } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Skill } from "../../config/AppConfiguration";
import { NavLink as RouterLink } from "react-router-dom";

const useStyles = makeStyles(theme => {
  return createStyles({
    root: {
      display: "inline-block",
      width: "60px",
      height: "60px",
      borderRadius: "50%"
    },
    years: {
      fontSize: 17,
      color: "white",
      marginBottom: 4
    },
    text: {
      fontSize: 11,
      color: "white"
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100%",
      textAlign: "center"
    }
  });
});

const CircularSkill: FunctionComponent<Skill> = ({
  color,
  years,
  text,
  route
}) => {
  const classes = useStyles(color);
  const baseComponent = (
    <div style={{ backgroundColor: color }} className={`${classes.root} inner`}>
      <div className={classes.wrapper}>
        <div className={classes.years}>{years}</div>
        <div className={classes.text}>{text}</div>
      </div>
    </div>
  );
  const drawCircularSkill = () => {
    if (route) {
      return (
        <RouterLink className={classes.root} to={`/${route}`}>
          {baseComponent}
        </RouterLink>
      );
    }
    return baseComponent;
  };
  return <div>{drawCircularSkill()}</div>;
};

export default CircularSkill;
