import React from "react";
import { Zoom, Typography, makeStyles, Theme } from "@material-ui/core";
import AppConfig, { getPostTrack } from "../../config/AppConfiguration";
import { SectionBuilder } from "../../components";
import PostList from "../../components/PostList";
import { usePosts } from "../../context/PostsContext";

const useStyles = makeStyles((theme: Theme) => ({
  intro: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    maxWidth: 560,
  },
  notes: {
    marginTop: theme.spacing(8),
  },
  notesHeader: {
    marginBottom: theme.spacing(3),
  },
}));

const PokerView = () => {
  const classes = useStyles();
  const { posts } = usePosts();
  const magnus = AppConfig.poker;
  const notes = posts
    .map((post, index) => ({ post, index }))
    .filter(({ post }) => getPostTrack(post) === "poker");

  return (
    <Zoom in={true} style={{ transitionDelay: "150ms" }}>
      <div>
        <Typography variant="body1" className={classes.intro}>
          The poker training app, and field notes from building it — range
          construction, decision-making, and how it reaches players.
        </Typography>
        {magnus && (
          <SectionBuilder
            styles={AppConfig.pages.ios.styles}
            sectionType="ios"
            section={magnus}
          />
        )}
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

export default PokerView;
