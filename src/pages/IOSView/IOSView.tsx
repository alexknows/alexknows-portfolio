import React from "react";
import { Zoom } from "@material-ui/core";
import AppConfig from "../../config/AppConfiguration";
import { SectionBuilder } from "../../components";

const IOSView = () => {
  const iosSections = AppConfig.pages.ios;
  return (
    <Zoom in={true} style={{ transitionDelay: true ? "150ms" : "0ms" }}>
      <div>
        {iosSections.sections.map((section, index) => (
          <SectionBuilder
            styles={iosSections.styles}
            sectionType="ios"
            key={index}
            section={section}
          />
        ))}
      </div>
    </Zoom>
  );
};
export default IOSView;
