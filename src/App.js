import React from 'react';
//Components
import Layout from './layouts/Layout';
//Redux
import { configureStore } from './store';
import { Provider as StoreProvider } from 'react-redux';

const store = configureStore();

function App() {

  return (
    <StoreProvider store={ store }>
      <Layout />
    </StoreProvider>
  );
}

export default App;
