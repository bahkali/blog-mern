import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import homePage from "./pages/homePage";
import ArticlePage from "./pages/ArticlePage";
import AboutPage from "./pages/AboutPage";
import ArticleListPage from "./pages/ArticleListPage";
import NavBar from "./components/navbar/navbar.component";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Route path="/" component={homePage} exact />
            <Route path="/article/:name" component={ArticlePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/article-list" component={ArticleListPage} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
