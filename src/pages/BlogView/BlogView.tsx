import React from "react";
import { Zoom, makeStyles, Theme } from "@material-ui/core";
import {
  NoteTrack,
  getPostTrack,
  noteTrackLabels,
} from "../../config/blogPostsData";
import PostList from "../../components/PostList";
import { usePosts } from "../../context/PostsContext";

const tracks: Array<NoteTrack | "all"> = [
  "all",
  "commerce",
  "poker",
  "startups",
  "engineering",
];

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 24,
  },
  filters: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  filter: {
    fontFamily: "Helvetica, Roboto, sans-serif",
    fontSize: 14,
    color: theme.palette.text.secondary,
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
}));

const BlogView = () => {
  const classes = useStyles();
  const [track, setTrack] = React.useState<NoteTrack | "all">("all");
  const { posts: allPosts } = usePosts();
  const indexed = allPosts.map((post, index) => ({ post, index }));
  const posts =
    track === "all"
      ? indexed
      : indexed.filter(({ post }) => getPostTrack(post) === track);

  return (
    <Zoom in={true} style={{ transitionDelay: "250ms" }}>
      <div className={classes.root}>
        <div className={classes.filters}>
          {tracks.map((item) => (
            <button
              key={item}
              type="button"
              className={`${classes.filter} ${
                track === item ? classes.active : ""
              }`}
              onClick={() => setTrack(item)}
            >
              {item === "all" ? "All" : noteTrackLabels[item]}
            </button>
          ))}
        </div>
        <PostList posts={posts} showTrack={track === "all"} />
      </div>
    </Zoom>
  );
};

export default BlogView;
