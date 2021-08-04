import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './components/redux/store'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>   
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();