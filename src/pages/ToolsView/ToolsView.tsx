import React from "react";
import { Zoom } from "@material-ui/core";
import AppConfig from "../../config/AppConfiguration";
import { SectionBuilder } from "../../components";

const ToolsView = () => {
  const toolsSections = AppConfig.pages.tools;
  return (
    <Zoom in={true} style={{ transitionDelay: true ? "250ms" : "0ms" }}>
      <div>
        {toolsSections.sections.map((section, index) => (
          <SectionBuilder
            styles={toolsSections.styles}
            sectionType="tools"
            key={index}
            section={section}
          />
        ))}
      </div>
    </Zoom>
  );
};
export default ToolsView;
