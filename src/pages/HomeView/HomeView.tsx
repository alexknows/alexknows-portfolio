import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Zoom, Typography, Link, makeStyles, Theme } from "@material-ui/core";
import { getPostTrack } from "../../config/blogPostsData";
import PostList from "../../components/PostList";
import { usePosts } from "../../context/PostsContext";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  tracks: {
    marginBottom: theme.spacing(6),
  },
  track: {
    marginBottom: theme.spacing(4),
  },
  trackLabel: {
    marginBottom: theme.spacing(0.5),
  },
  notesHeader: {
    marginBottom: theme.spacing(3),
  },
}));

const tracks = [
  {
    to: "/ecommerce",
    title: "E-commerce",
    text:
      "Coming soon: strategies, tools, and systems for growing an e-commerce business.",
  },
  {
    to: "/poker",
    title: "Poker",
    text:
      "A training app for range construction and decision-making, plus notes from building it.",
  },
];

const HomeView = () => {
  const classes = useStyles();
  const { posts } = usePosts();
  const latest = posts
    .map((post, index) => ({ post, index }))
    .slice(0, 3);

  return (
    <Zoom in={true} style={{ transitionDelay: "150ms" }}>
      <div className={classes.root}>
        <div className={classes.tracks}>
          {tracks.map((track) => (
            <div key={track.to} className={classes.track}>
              <Typography variant="h1" className={classes.trackLabel}>
                <Link
                  component={RouterLink}
                  to={track.to}
                  color="primary"
                  underline="hover"
                >
                  {track.title}
                </Link>
              </Typography>
              <Typography variant="body1">{track.text}</Typography>
            </div>
          ))}
        </div>
        <Typography variant="h2" className={classes.notesHeader}>
          Latest notes
        </Typography>
        <PostList
          posts={latest}
          showTrack={latest.some(
            ({ post }) => getPostTrack(post) !== "engineering"
          )}
        />
      </div>
    </Zoom>
  );
};

export default HomeView;
