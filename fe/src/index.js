import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from 'store/store'
import Test from 'components/test/test'
import Wrapper from 'components/common/wrapper';
import { Provider } from 'react-redux'
import AxiosSetting from 'components/common/axiosSetting';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <AxiosSetting/>
    <Wrapper>
      <BrowserRouter>
        <Test />
      </BrowserRouter>
    </Wrapper>
  </Provider>

);
reportWebVitals();