import React from "react";
import { Zoom, Grid } from "@material-ui/core";
import AppConfig from "../../config/AppConfiguration";
import { SectionBuilder } from "../../components";

const AndroidView = () => {
  const androidSections = AppConfig.pages.android;
  const sectionsType = "android";
  return (
    <Zoom in={true} style={{ transitionDelay: true ? "150ms" : "0ms" }}>
      <div>
        {androidSections.sections.map((section, index) => (
          <SectionBuilder
            styles={androidSections.styles}
            sectionType={sectionsType}
            key={index}
            section={section}
          />
        ))}
      </div>
    </Zoom>
  );
};

export default AndroidView;
