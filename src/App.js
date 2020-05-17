import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import homePage from "./pages/homePage";
import ArticlePage from "./pages/ArticlePage";
import AboutPage from "./pages/AboutPage";
import ArticleListPage from "./pages/ArticleListPage";
import NavBar from "./components/navbar/navbar.component";
import NotFoundPage from "./pages/NotFoundPage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" component={homePage} exact />
              <Route path="/article/:name" component={ArticlePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/article-list" component={ArticleListPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
