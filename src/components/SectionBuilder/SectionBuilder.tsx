import React, { useState, useEffect } from "react";
import {
  Section,
  SeeMore,
  SeeMoreMetadata
} from "../../config/AppConfiguration";
import {
  makeStyles,
  Theme,
  Grid,
  Typography,
  Button,
  Collapse,
  Link
} from "@material-ui/core";

interface SectionBuilderProps {
  section: Section;
  sectionType?: "android" | "ios" | "web" | "ai" | "tools";
  styles: (
    props?: any
  ) => Record<
    "image" | "list" | "seeMoreButton" | "seeMoreText" | "text",
    string
  >;
}
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: "center",
    margin: theme.spacing(12, 0, 0, 0)
  },
  innerSeciton: {
    margin: theme.spacing(6, 0, 0, 0)
  },
  multiple: {
    maxWidth: 185
  },
  single: {
    width: "100%",
    flex: '0 0 100%'
  },
  square: {
    maxWidth: 60,
    borderRadius: "10%"
  },
  wide: {
    width: 220
  },
  none: {

  },
  projectLinks: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: theme.spacing(0, 2),
    marginTop: theme.spacing(0.5),
    "& a": {
      color: theme.palette.text.secondary,
      fontSize: "0.9rem",
      "&:hover": {
        color: theme.palette.primary.main
      }
    }
  }
}));
const SectionBuilder = (props: SectionBuilderProps) => {
  const [seeMore, setSeeMore] = useState(false);
  const [showedLines, setShowedLines] = useState(1);
  useEffect(() => {
    if (props.section.seeMoreMetadata?.text?.length) {
      setShowedLines(props.section.seeMoreMetadata.text.length);
    }
  }, [props.section.seeMoreMetadata?.text?.length]);
  const classes = useStyles();
  const configClasses = props.styles();
  const section = props.section;
  const seeMoreMetada: SeeMoreMetadata | undefined =
    props.section.seeMoreMetadata;
  const drawImages = () => {
    const imagesViews: any[] = [];
    (section.images as string[]).forEach((img, index) => {
      const imagPath = require(`../../assets/images/${section.assetsFolderName}/${img}`);
      imagesViews.push(
        <Grid className={section.imagesType === 'single' ? classes.single : classes.none}   key={index} item>
          <img
            className={`${classes[section.imagesType]} ${configClasses.image}`}
            src={imagPath}
            alt=""
          />
        </Grid>
      );
    });
    return (
      <Grid style={{ overflow: "auto" }} wrap="nowrap" spacing={2} container>
        {imagesViews}
      </Grid>
    );
  };
  const drawTopSection = () => {
    const { title, subtitle, headerImage, link, websiteLink, appStoreLink } = section;
    const headerHref = websiteLink || link;
    const headerImgPath = headerImage
      ? require(`../../assets/images/${section.assetsFolderName}/${headerImage}`)
      : null;
    const headerImageEl = headerImgPath ? (
      <img
        className={classes[section.headerImageType]}
        src={headerImgPath}
        alt=""
      />
    ) : null;
    return (
      <Grid spacing={2} container justifyContent="center" direction="column">
        {headerImageEl && (
          <Grid item>
            {headerHref ? (
              <a href={headerHref} target="_blank" rel="noreferrer">
                {headerImageEl}
              </a>
            ) : (
              headerImageEl
            )}
          </Grid>
        )}
        <Grid item>
          <Typography variant="h1">{title ? title : ""}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2">{subtitle ? subtitle : ""}</Typography>
        </Grid>
        {(websiteLink || appStoreLink) && (
          <Grid item>
            <div className={classes.projectLinks}>
              {websiteLink && (
                <Link
                  href={websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  underline="hover"
                >
                  Website
                </Link>
              )}
              {appStoreLink && (
                <Link
                  href={appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  underline="hover"
                >
                  App Store
                </Link>
              )}
            </div>
          </Grid>
        )}
      </Grid>
    );
  };
  const drawBottomSection = () => {
    const { text } = section;
    return (
      <Grid direction="column" item container xs={12} md={12} lg={12}>
        <Typography className={configClasses.text} align="left" variant="body2">
          {text}
        </Typography>
        {section.seeMoreMetadata ? drawSeeMoreSection() : ""}
        {seeMoreMetada ? (
          <Button
            style={{ textTransform: "none" }}
            className={configClasses.seeMoreButton}
          >
            <button
              onClick={event => {
                event.preventDefault();
                setSeeMore(!seeMore);
              }}
            >
              {seeMore
                ? seeMoreMetada.toggledText
                : seeMoreMetada.unToggledText}
            </button>
          </Button>
        ) : (
          ""
        )}
      </Grid>
    );
  };
  const drawSeeMoreSection = () => {
    const texts = seeMoreMetada?.text;
    const type = seeMoreMetada?.type as SeeMore;
    const seeMoreViews: any = {
      [SeeMore.list]: () => {
        return drawSeeMoreList(texts as []);
      },
      [SeeMore.text]: () => {
        return (
          <div style={{ textAlign: "left" }}>
            {texts?.slice(0, showedLines).map(text => (
              <Typography
                style={
                  seeMore ? { marginTop: 10 } : { opacity: 0.4, marginTop: 10 }
                }
                className={configClasses.text}
                variant="body2"
              >
                {text}
              </Typography>
            ))}
          </div>
        );
      }
    };
    return (
      <Collapse in={seeMore} collapsedHeight={40}>
        {seeMoreViews[type]()}
      </Collapse>
    );
  };
  const drawSeeMoreList = (texts: []) => {
    return (
      <ul style={{ marginTop: 15 }} className={configClasses.list}>
        {texts.slice(0, showedLines).map(text => (
          <li style={seeMore ? {} : { opacity: 0.4 }}>
            <Typography className={configClasses.text} variant="body2">
              {text}
            </Typography>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className={classes.root}>
      <div className={classes.innerSeciton}>{drawTopSection()}</div>
      <div className={classes.innerSeciton}>{drawImages()}</div>
      <div className={classes.innerSeciton}>{drawBottomSection()}</div>
    </div>
  );
};

export default SectionBuilder;
