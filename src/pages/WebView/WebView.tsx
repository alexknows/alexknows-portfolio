import React from "react";
import { Zoom } from "@material-ui/core";
import AppConfig from "../../config/AppConfiguration";
import { SectionBuilder } from "../../components";

const WebView = (props: any) => {
  const webSections = AppConfig.pages.web;
  return (
    <Zoom in={true} style={{ transitionDelay: true ? "350ms" : "0ms" }}>
      <div>
        {webSections.sections.map((section, index) => (
          <SectionBuilder
            styles={webSections.styles}
            sectionType="web"
            key={index}
            section={section}
          />
        ))}
      </div>
    </Zoom>
  );
};

export default WebView;
