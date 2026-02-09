import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { RouteWithLayout } from "./components";
import { IOSView, AndroidView, WebView, AiView, ToolsView, BlogView, BlogPostView } from "./pages";
import { PortfolioLayout } from "./layouts";
const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/ios" />
      <Redirect exact from="/blog" to="/blogs" />

      <RouteWithLayout
        component={AndroidView}
        exact
        layout={PortfolioLayout}
        path="/android"
      />
      <RouteWithLayout
        component={IOSView}
        exact
        layout={PortfolioLayout}
        path="/ios"
      />
      <RouteWithLayout
        component={WebView}
        exact
        layout={PortfolioLayout}
        path="/web"
      />
      <RouteWithLayout
        component={AiView}
        exact
        layout={PortfolioLayout}
        path="/ai"
      />
      <RouteWithLayout
        component={ToolsView}
        exact
        layout={PortfolioLayout}
        path="/tools"
      />
      <RouteWithLayout
        component={BlogPostView}
        layout={PortfolioLayout}
        path="/blogs/:postId"
      />
      <RouteWithLayout
        component={BlogView}
        exact
        layout={PortfolioLayout}
        path="/blogs"
      />
    </Switch>
  );
};

export default Routes;
