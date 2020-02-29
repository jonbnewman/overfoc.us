import React from "react";
import { Switch, Route } from "react-router-dom";
import BodyArea from "./BodyArea";

export default () => (
  <BodyArea>
    <Switch>
      <Route path="/active">Active</Route>
      <Route path="/archived">Archived</Route>
      <Route path="/">Home</Route>
    </Switch>
  </BodyArea>
);
