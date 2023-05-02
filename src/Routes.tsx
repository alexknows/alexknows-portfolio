import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { RouteWithLayout } from "./components";
import { IOSView, AndroidView, WebView } from "./pages";
import { PortfolioLayout } from "./layouts";
const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/ios" />

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
    </Switch>
  );
};

export default Routes;
