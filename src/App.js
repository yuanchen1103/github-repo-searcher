import React from 'react';
import { Provider } from 'react-redux';

import store from './configureStore';

import HeaderContainer from './components/Header/HeaderContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HeaderContainer />
      </div>
    </Provider>
  );
}

export default App;
