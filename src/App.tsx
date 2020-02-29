import React from "react";
import { Switch, Route } from "react-router-dom";
import { createStore, useProvider } from "mobx-store-provider";
import { HashRouter as Router } from "react-router-dom";

import { Store, IStore } from "state/Store";
import { appState } from "state";

import AppGrid from "components/AppGrid";
import Header from "components/Header";
import Body from "components/Body";
import Footer from "components/Footer";

import Home from "pages/Home";
import ProjectList from "pages/ProjectList";

declare global {
  interface Window {
    store: any;
  }
}

function App() {
  const store: IStore = createStore(() => Store.create(appState));
  const Provider = useProvider();

  if (process.env.NODE_ENV !== "production") {
    window.store = store;
  }

  return (
    <Provider value={store}>
      <Router>
        <AppGrid>
          <Header />
          <Body>
            <Switch>
              {store.project_status_types.map(statusType => (
                <Route path={statusType.path} component={ProjectList} key={statusType.status} />
              ))}
              <Route path="/" component={Home} />
            </Switch>
          </Body>
          <Footer />
        </AppGrid>
      </Router>
    </Provider>
  );
}

export default App;
