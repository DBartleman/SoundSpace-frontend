import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import storeConfig from "./storeActions/storeConfig";
import { BrowserRouter } from "react-router-dom";
import jwt_decode from 'jwt-decode'
import App from './app';

let store;

if (localStorage["soundspace/authentication/TOKEN"]) {
  const decodedUser = jwt_decode(localStorage["soundspace/authentication/TOKEN"])
  delete decodedUser["favoritealbums"]
  const preState = { User: decodedUser }
  store = storeConfig(preState)
}
else {
  store = storeConfig();
}



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);