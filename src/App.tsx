import React from "react";
import { createStore, useProvider } from "mobx-store-provider";
import { HashRouter as Router } from "react-router-dom";

import { Store, IStore } from "state/Store";
import { appState } from "state";

import Container from "components/Container";
import Header from "components/Header";
import Body from "components/Body";
import Footer from "components/Footer";

function App() {
  const store: IStore = createStore(() => Store.create(appState));
  const Provider = useProvider();
  return (
    <Provider value={store}>
      <Router>
        <Container>
          <Header />
          <Body />
          <Footer />
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
