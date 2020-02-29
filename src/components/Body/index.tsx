import React from "react";
import { Switch, Route } from "react-router-dom";
import Container from "./Container";

export default () => (
  <Container>
    <Switch>
      <Route path="/active">Active</Route>
      <Route path="/archived">Archived</Route>
      <Route path="/">Home</Route>
    </Switch>
  </Container>
);
