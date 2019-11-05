import React from 'react';
import { Provider } from 'react-redux';

import store from './configureStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App"></div>
    </Provider>
  );
}

export default App;
