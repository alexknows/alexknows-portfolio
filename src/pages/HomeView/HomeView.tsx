import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Zoom, Typography, Link, makeStyles, Theme } from "@material-ui/core";
import { getPostTrack } from "../../config/blogPostsData";
import PostList from "../../components/PostList";
import { usePosts } from "../../context/PostsContext";

const magnusLogo = require("../../assets/images/IOS/Magnus2026/logo.jpg");

const feltGrain = `url("data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>'
)}")`;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  featured: {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "flex-start",
    gap: theme.spacing(2.5),
    marginBottom: theme.spacing(7),
    maxWidth: 680,
    padding: theme.spacing(3.5, 4),
    borderRadius: 20,
    backgroundColor: "#164a32",
    backgroundImage: [
      "radial-gradient(110% 55% at 50% -5%, rgba(170, 220, 160, 0.42) 0%, transparent 58%)",
      "linear-gradient(180deg, #62b56f 0%, #3d8a52 28%, #215c3a 62%, #10281c 100%)",
    ].join(", "),
    boxShadow: "inset 0 0 0 1px rgba(212, 184, 120, 0.32)",
    "&::after": {
      content: '""',
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      pointerEvents: "none",
      opacity: 0.28,
      backgroundImage: feltGrain,
      mixBlendMode: "multiply",
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2.5),
    },
  },
  featuredIcon: {
    width: 72,
    height: 72,
    borderRadius: 14,
    display: "block",
    flexShrink: 0,
    boxShadow: "0 0 0 1px rgba(243, 236, 216, 0.22)",
  },
  featuredCopy: {
    minWidth: 0,
  },
  featuredTitle: {
    marginBottom: theme.spacing(0.25),
    color: "#f4efe4",
    "& a": {
      color: "#f4efe4",
      "&:hover": {
        color: "#d4e8c8",
      },
    },
  },
  featuredSubtitle: {
    marginBottom: theme.spacing(1.25),
    color: "#b7c9b3",
  },
  featuredBody: {
    color: "#e4ddd0",
  },
  featuredLinks: {
    marginTop: theme.spacing(1.5),
    "& a": {
      color: "#c5e0b8",
      "&:hover": {
        color: "#f4efe4",
      },
    },
  },
  featuredNotes: {
    marginLeft: theme.spacing(2),
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

const HomeView = () => {
  const classes = useStyles();
  const { posts } = usePosts();
  const latest = posts
    .map((post, index) => ({ post, index }))
    .slice(0, 3);

  return (
    <Zoom in={true} style={{ transitionDelay: "150ms" }}>
      <div className={classes.root}>
        <div className={classes.featured}>
          <a
            href="https://www.magnuspoker.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={classes.featuredIcon}
              src={magnusLogo}
              alt="Magnus Poker"
            />
          </a>
          <div className={classes.featuredCopy}>
            <Typography variant="h1" className={classes.featuredTitle}>
              <Link
                href="https://www.magnuspoker.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                underline="hover"
              >
                Magnus Poker
              </Link>
            </Typography>
            <Typography variant="h2" className={classes.featuredSubtitle}>
              Hand Reading Mastery Framework
            </Typography>
            <Typography variant="body1" className={classes.featuredBody}>
              Solve no-limit poker hands like Sherlock Holmes solves criminal
              cases. Narrow your opponent's range with precision. Use every clue
              to make consistently +EV decisions.
            </Typography>
            <Typography variant="body2" className={classes.featuredLinks}>
              <Link
                href="https://www.magnuspoker.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                underline="hover"
              >
                magnuspoker.xyz
              </Link>
              <Link
                component={RouterLink}
                to="/poker"
                color="inherit"
                underline="hover"
                className={classes.featuredNotes}
              >
                Notes from building it
              </Link>
            </Typography>
          </div>
        </div>
        <div className={classes.tracks}>
          <div className={classes.track}>
            <Typography variant="h1" className={classes.trackLabel}>
              <Link
                component={RouterLink}
                to="/ecommerce"
                color="primary"
                underline="hover"
              >
                E-commerce
              </Link>
            </Typography>
            <Typography variant="body1">
              Coming soon: strategies, tools, and systems for growing an
              e-commerce business.
            </Typography>
          </div>
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
