import React from "react";
import { Zoom, Typography, Box, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useParams, useHistory } from "react-router-dom";
import AppConfig from "../../config/AppConfiguration";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 24,
  },
  backLink: {
    marginBottom: 24,
    display: "inline-block",
    cursor: "pointer",
  },
  date: {
    marginBottom: 8,
  },
  title: {
    marginBottom: 16,
  },
  content: {
    whiteSpace: "pre-wrap",
    lineHeight: 1.7,
    "& strong": {
      fontWeight: 700,
    },
  },
  codeBlock: {
    display: "block",
    padding: 16,
    marginTop: 12,
    marginBottom: 12,
    backgroundColor: "rgba(0,0,0,0.06)",
    borderRadius: 4,
    overflow: "auto",
    fontFamily: "monospace",
    fontSize: 13,
    lineHeight: 1.5,
    whiteSpace: "pre",
    border: "1px solid rgba(0,0,0,0.08)",
  },
  postImage: {
    maxWidth: "100%",
    height: "auto",
    marginTop: 16,
    marginBottom: 16,
    display: "block",
    borderRadius: 4,
  },
}));

const BlogPostView = () => {
  const classes = useStyles();
  const { postId } = useParams<{ postId: string }>();
  const history = useHistory();
  const posts = AppConfig.blogPosts;
  const index = parseInt(postId ?? "", 10);
  const post =
    !isNaN(index) && index >= 0 && index < posts.length ? posts[index] : null;

  if (!post) {
    return (
      <div className={classes.root}>
        <Link
          component="button"
          variant="body2"
          onClick={() => history.push("/blogs")}
          className={classes.backLink}
        >
          ← Back to Blogs
        </Link>
        <Typography color="textSecondary">Post not found.</Typography>
      </div>
    );
  }

  const renderParagraph = (text: string, key: number) => {
    const trimmed = text.trim();
    if (!trimmed) return null;
    if (trimmed.startsWith("[IMAGE]")) {
      const src = trimmed.replace(/^\[IMAGE\]/, "").trim();
      if (src) {
        return (
          <img
            key={key}
            src={src}
            alt="Architecture diagram"
            className={classes.postImage}
          />
        );
      }
      return null;
    }
    const isBoldHeader = /^\*\*[^*]+\*\*$/.test(trimmed) || trimmed.startsWith("**");
    if (isBoldHeader) {
      return (
        <Typography key={key} variant="h2" style={{ marginTop: 16, marginBottom: 8, fontWeight: 700 }}>
          {trimmed.replace(/\*\*/g, "")}
        </Typography>
      );
    }
    return (
      <Typography
        key={key}
        variant="body1"
        paragraph
        className={classes.content}
        style={{ marginBottom: 12 }}
      >
        {trimmed.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={i}>{part.slice(2, -2)}</strong>
          ) : (
            part
          )
        )}
      </Typography>
    );
  };

  const parts: React.ReactNode[] = [];
  const segments = post.content.split(/\n?```\n?/);
  let keyIdx = 0;
  segments.forEach((segment, i) => {
    if (i % 2 === 1) {
      parts.push(
        <pre key={keyIdx++} className={classes.codeBlock}>
          {segment.trim()}
        </pre>
      );
    } else {
      segment
        .split(/\n\n+/)
        .forEach((paragraph) => {
          const node = renderParagraph(paragraph, keyIdx++);
          if (node) parts.push(node);
        });
    }
  });
  const contentWithParagraphs = parts;

  return (
    <Zoom in={true} style={{ transitionDelay: "150ms" }}>
      <div className={classes.root}>
        <Link
          component="button"
          variant="body2"
          onClick={() => history.push("/blogs")}
          className={classes.backLink}
          color="primary"
        >
          ← Back to Blogs
        </Link>
        <Typography variant="body2" color="textSecondary" className={classes.date}>
          {post.date}
        </Typography>
        <Typography variant="h1" className={classes.title}>
          {post.title}
        </Typography>
        <Box className={classes.content}>{contentWithParagraphs}</Box>
      </div>
    </Zoom>
  );
};
export default BlogPostView;
