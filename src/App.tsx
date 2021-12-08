import React from 'react';

import 'antd/dist/antd.css'

import { Button } from 'antd';
import LayoutContainer from './Containers/LayoutContainer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LayoutContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
