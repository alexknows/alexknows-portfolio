import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import { RouteWithLayout } from "./components";
import {
  HomeView,
  CommerceView,
  PokerView,
  WorkView,
  BlogView,
  BlogPostView,
  AdminView,
} from "./pages";
import { PortfolioLayout } from "./layouts";

const Routes = () => {
  return (
    <Switch>
      <Route path="/admin" component={AdminView} />
      <Redirect exact from="/blog" to="/notes" />
      <Redirect exact from="/blogs" to="/notes" />
      <Redirect exact from="/posts" to="/notes" />
      <Redirect exact from="/commerce" to="/ecommerce" />
      <Redirect exact from="/work" to="/past-projects/ios" />
      <Redirect exact from="/past-projects" to="/past-projects/ios" />
      <Redirect exact from="/ios" to="/past-projects/ios" />
      <Redirect exact from="/android" to="/past-projects/android" />
      <Redirect exact from="/web" to="/past-projects/web" />
      <Redirect exact from="/ai" to="/past-projects/ai" />
      <Redirect exact from="/tools" to="/past-projects/tools" />

      <RouteWithLayout
        component={HomeView}
        exact
        layout={PortfolioLayout}
        path="/"
      />
      <RouteWithLayout
        component={CommerceView}
        exact
        layout={PortfolioLayout}
        path="/ecommerce"
      />
      <RouteWithLayout
        component={PokerView}
        exact
        layout={PortfolioLayout}
        path="/poker"
      />
      <RouteWithLayout
        component={WorkView}
        exact
        layout={PortfolioLayout}
        path="/past-projects/:platform"
      />
      <Route
        path="/work/:platform"
        render={({ match }) => (
          <Redirect to={`/past-projects/${match.params.platform}`} />
        )}
      />
      <RouteWithLayout
        component={BlogPostView}
        layout={PortfolioLayout}
        path="/notes/:postId"
      />
      <RouteWithLayout
        component={BlogPostView}
        layout={PortfolioLayout}
        path="/posts/:postId"
      />
      <RouteWithLayout
        component={BlogView}
        exact
        layout={PortfolioLayout}
        path="/notes"
      />
    </Switch>
  );
};

export default Routes;
