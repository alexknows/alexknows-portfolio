import React from "react";
import { Zoom, Typography, makeStyles, Theme } from "@material-ui/core";
import { getPostTrack } from "../../config/AppConfiguration";
import PostList from "../../components/PostList";
import { usePosts } from "../../context/PostsContext";

const useStyles = makeStyles((theme: Theme) => ({
  intro: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    maxWidth: 560,
  },
  comingSoon: {
    marginTop: theme.spacing(6),
    maxWidth: 560,
  },
  comingSoonTitle: {
    marginBottom: theme.spacing(0.5),
  },
  comingSoonBody: {
    marginTop: theme.spacing(2),
  },
  notes: {
    marginTop: theme.spacing(8),
  },
  notesHeader: {
    marginBottom: theme.spacing(3),
  },
}));

const CommerceView = () => {
  const classes = useStyles();
  const { posts } = usePosts();
  const notes = posts
    .map((post, index) => ({ post, index }))
    .filter(({ post }) => getPostTrack(post) === "commerce");

  return (
    <Zoom in={true} style={{ transitionDelay: "150ms" }}>
      <div>
        <Typography variant="body1" className={classes.intro}>
          This track is for operators who already have a store — and need it to
          grow without drowning in SaaS, spreadsheets, and fragile ops.
        </Typography>
        <div className={classes.comingSoon}>
          <Typography variant="h1" className={classes.comingSoonTitle}>
            Coming soon
          </Typography>
          <Typography variant="h2">
            Strategies, tools, and systems for growing an e-commerce business.
          </Typography>
          <Typography variant="body1" className={classes.comingSoonBody}>
            Playbooks you can run, tools you can actually use, and the unglamorous
            internal systems that keep a DTC brand moving — acquisition tests,
            operator workflows, and the glue between the apps a store already pays
            for. Notes from the work will land here as they ship.
          </Typography>
        </div>
        <div className={classes.notes}>
          <Typography variant="h1" className={classes.notesHeader}>
            Notes
          </Typography>
          <PostList posts={notes} showTrack={false} />
        </div>
      </div>
    </Zoom>
  );
};

export default CommerceView;
