import React from "react";
import { Zoom, Typography, makeStyles, Theme } from "@material-ui/core";
import { getPostTrack } from "../../config/AppConfiguration";
import PostList from "../../components/PostList";
import { usePosts } from "../../context/PostsContext";

const examples = [
  {
    title: "Kiln",
    subtitle: "Small-batch kitchenware, sold direct",
    text:
      "Placeholder for the first e-commerce experiment — a short catalog, checkout, and an early paid-acquisition test. More will go here.",
  },
];

const useStyles = makeStyles((theme: Theme) => ({
  intro: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    maxWidth: 560,
  },
  example: {
    textAlign: "center",
    margin: theme.spacing(8, 0, 0, 0),
  },
  exampleBody: {
    textAlign: "left",
    marginTop: theme.spacing(3),
    lineHeight: "24px",
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
          Experiments and go-to-market on this track. More projects will land
          here.
        </Typography>
        {examples.map((example) => (
          <div key={example.title} className={classes.example}>
            <Typography variant="h1">{example.title}</Typography>
            <Typography variant="h2">{example.subtitle}</Typography>
            <Typography variant="body2" className={classes.exampleBody}>
              {example.text}
            </Typography>
          </div>
        ))}
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
