import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import request from './main/utils/request';
import reducer from './main/reducer';
import App from './main/App';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(reduxThunk.withExtraArgument(request))),
);

render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('react-root'),
);
