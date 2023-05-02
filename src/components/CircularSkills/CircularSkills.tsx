import React from "react";
import AppConfig, { Skill } from "../../config/AppConfiguration";
import { makeStyles, Grid } from "@material-ui/core";
import CircularSkill from "../CircularSkill/CircularSkill";
import { withRouter, RouteComponentProps } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "right"
  },
  skill: {}
}));
const CircularSkills = (props: RouteComponentProps) => {
  const classes = useStyles();
  const { skills } = AppConfig;
  const { location } = props;
  const getSkillColor = (skill: Skill) => {
    if (!skill.route) {
      return skill.color;
    }
    return skill.route && location.pathname.includes(skill.route)
      ? "black"
      : "gray";
  };
  return (
    <div className={classes.root}>
      <Grid justify="flex-end" spacing={1} container>
        {skills.map((skill, index) => (
          <Grid key={index} item>
            <CircularSkill
              color={getSkillColor(skill)}
              text={skill.text}
              years={skill.years}
              route={skill?.route}
              key={index}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withRouter(CircularSkills);
