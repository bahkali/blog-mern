import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import homePage from "./pages/homePage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={homePage} exact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
