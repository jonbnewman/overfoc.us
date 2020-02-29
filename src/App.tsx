import React from 'react';
import { createStore, useProvider } from 'mobx-store-provider';
import Container from './Container';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { Store, IStore } from './Store';

function App() {
  const store: IStore = createStore(() => Store.create());
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
