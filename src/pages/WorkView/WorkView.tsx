import React from "react";
import { Link as RouterLink, useParams, Redirect } from "react-router-dom";
import { Zoom, Typography, Link, makeStyles, Theme } from "@material-ui/core";
import AppConfig, { Pages } from "../../config/AppConfiguration";
import { SectionBuilder } from "../../components";

const platforms: { id: keyof Pages; label: string }[] = [
  { id: "ios", label: "iOS" },
  { id: "android", label: "Android" },
  { id: "web", label: "Web" },
  { id: "ai", label: "AI" },
  { id: "tools", label: "Tools" },
];

const useStyles = makeStyles((theme: Theme) => ({
  intro: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    maxWidth: 560,
  },
  platforms: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  platform: {
    fontSize: 14,
  },
  active: {
    fontWeight: 700,
  },
}));

const WorkView = () => {
  const classes = useStyles();
  const { platform } = useParams<{ platform?: string }>();
  const active = platforms.find((item) => item.id === platform);

  if (!active) {
    return <Redirect to="/past-projects/ios" />;
  }

  const page = AppConfig.pages[active.id];

  return (
    <Zoom in={true} style={{ transitionDelay: "150ms" }}>
      <div>
        <Typography variant="body1" className={classes.intro}>
          Ten years of shipping software — the iOS, Android, web, and AI work
          that sits underneath the two tracks.
        </Typography>
        <div className={classes.platforms}>
          {platforms.map((item) => (
            <Link
              key={item.id}
              component={RouterLink}
              to={`/past-projects/${item.id}`}
              color="primary"
              underline="hover"
              className={`${classes.platform} ${
                item.id === active.id ? classes.active : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        {page.sections.map((section, index) => (
          <SectionBuilder
            styles={page.styles}
            sectionType={active.id}
            key={`${section.title}-${index}`}
            section={section}
          />
        ))}
      </div>
    </Zoom>
  );
};

export default WorkView;
