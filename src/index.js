import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import {ContextProvider} from "./Components/Hooks/useHooks";
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Components/Chat/redux/store";
import 'emoji-mart/css/emoji-mart.css'
import { userActions} from "./Components/Chat/redux/actions";

store.dispatch(userActions.fetchUserData())

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <ContextProvider>
        <App/>
    </ContextProvider>
    </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
