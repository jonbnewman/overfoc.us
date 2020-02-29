import React from 'react';
import { createStore, useProvider } from 'mobx-store-provider';
import Container from './Container';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { Store, IStore } from './state/Store';
import { appState } from './state';

function App() {
  const store: IStore = createStore(() => Store.create(appState));
  const Provider = useProvider();
  return (
    <Provider value={store}>
      <Container>
        <Header />
        <Body />
        <Footer />
      </Container>
    </Provider>
  );
}

export default App;
