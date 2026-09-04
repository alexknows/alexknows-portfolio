import React from "react";
import { Box, Link, Typography, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import {
  BlogPost,
  getPostTrack,
  noteTrackLabels,
} from "../../config/blogPostsData";

const useStyles = makeStyles(() => ({
  post: {
    marginBottom: 32,
  },
  meta: {
    marginBottom: 4,
    display: "flex",
    gap: 8,
    alignItems: "baseline",
  },
  title: {
    marginBottom: 8,
  },
  excerpt: {
    lineHeight: 1.5,
    maxWidth: "100%",
  },
  readMore: {
    marginTop: 8,
    display: "inline-block",
  },
}));

export interface IndexedPost {
  post: BlogPost;
  index: number;
}

interface PostListProps {
  posts: IndexedPost[];
  showTrack?: boolean;
}

const PostList = ({ posts, showTrack = true }: PostListProps) => {
  const classes = useStyles();

  if (!posts.length) {
    return (
      <Typography variant="body2" color="textSecondary">
        Field notes from this track will show up here.
      </Typography>
    );
  }

  return (
    <>
      {posts.map(({ post, index }) => (
        <Box key={`${post.title}-${index}`} className={classes.post}>
          <div className={classes.meta}>
            <Typography variant="body2" color="textSecondary">
              {post.date}
            </Typography>
            {showTrack && (
              <Typography variant="body2" color="textSecondary">
                {noteTrackLabels[getPostTrack(post)]}
              </Typography>
            )}
          </div>
          <Typography variant="h1" className={classes.title}>
            <Link
              component={RouterLink}
              to={`/notes/${post.id || index}`}
              color="primary"
              underline="hover"
            >
              {post.title}
            </Link>
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.excerpt}
          >
            {post.excerpt}
          </Typography>
          <Link
            component={RouterLink}
              to={`/notes/${post.id || index}`}
            color="primary"
            variant="body2"
            underline="hover"
            className={classes.readMore}
          >
            Read full post →
          </Link>
        </Box>
      ))}
    </>
  );
};

export default PostList;
