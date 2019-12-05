import React from "react";
import ReactDOM from "react-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/index.scss";
// pages

import client from "./views/helpers/graphqlEndpoint";

import { ApolloProvider } from "@apollo/react-hooks";

import App from "./App.js";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />{" "}
  </ApolloProvider>,
  document.getElementById("root")
);
