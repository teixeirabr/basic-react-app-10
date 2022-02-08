import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

import "./App.css";
import router from "./router";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">{router}</div>
      </BrowserRouter>
    );
  }
}

export default App;
