import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";

import Navbar from "./components/NavBar"
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// importing third web
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';

//include the chain id we want to work with
//4 = Rinkeby

const supportedChainsIds =[4]

// Include what type of wallet you want to support.
// In this case, we support Metamask which is an "injected wallet".
const connectors = {
  injected: {},
};



// Render the App component to the DOM
ReactDOM.render(
  <React.StrictMode>
  <ThirdwebWeb3Provider
  connectors={connectors}
  supportedChainIds={supportedChainsIds}
  >
  <div className="landing">
   <App />
  </div>
  </ThirdwebWeb3Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
