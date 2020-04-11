import "./style";
import { Component } from "preact";
import { Provider } from "unistore/preact";
import createStore from "unistore";
import Router from "preact-router";
import AsyncRoute from "preact-async-route";

import initialStore from "./pages/domain";

import HomePage from "./pages/home";

const store = createStore(initialStore());

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <HomePage path="/" />
          <AsyncRoute
            path="/book/:bookid"
            getComponent={() => import("./pages/book-details").then(module => module.default)}
            loading={() => <div>Loading...</div>}
          />
        </Router>
      </Provider>
    );
  }
}
