import React from "react";
import { Zoom } from "@material-ui/core";
import AppConfig from "../../config/AppConfiguration";
import { SectionBuilder } from "../../components";

const AiView = () => {
  const aiSections = AppConfig.pages.ai;
  return (
    <Zoom in={true} style={{ transitionDelay: true ? "250ms" : "0ms" }}>
      <div>
        {aiSections.sections.map((section, index) => (
          <SectionBuilder
            styles={aiSections.styles}
            sectionType="ai"
            key={index}
            section={section}
          />
        ))}
      </div>
    </Zoom>
  );
};
export default AiView;
