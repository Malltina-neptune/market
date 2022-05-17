import React from 'react';
import {Navigation} from './src/navigation/index';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
};

export default App;
