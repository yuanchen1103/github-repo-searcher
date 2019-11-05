import React from 'react';
import { Provider } from 'react-redux';

import store from './configureStore';

import HeaderContainer from './components/Header/HeaderContainer';
import ReposContainer from './components/Repos/ReposContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HeaderContainer />
        <ReposContainer />
      </div>
    </Provider>
  );
}

export default App;
