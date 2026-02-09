import React from "react";
import { Zoom, Typography, Box, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import AppConfig from "../../config/AppConfiguration";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 24,
  },
  post: {
    marginBottom: 32,
  },
  date: {
    marginBottom: 4,
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

const BlogView = () => {
  const classes = useStyles();
  const posts = AppConfig.blogPosts;

  return (
    <Zoom in={true} style={{ transitionDelay: "250ms" }}>
      <div className={classes.root}>
        {posts.map((post, index) => (
          <Box key={`${post.title}-${index}`} className={classes.post}>
            <Typography
              variant="body2"
              color="textSecondary"
              className={classes.date}
            >
              {post.date}
            </Typography>
            <Typography variant="h1" className={classes.title}>
              <Link
                component={RouterLink}
                to={`/blogs/${index}`}
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
              to={`/blogs/${index}`}
              color="primary"
              variant="body2"
              underline="hover"
              className={classes.readMore}
            >
              Read full post →
            </Link>
          </Box>
        ))}
      </div>
    </Zoom>
  );
};
export default BlogView;
