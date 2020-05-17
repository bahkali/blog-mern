import React from "react";

import articles from "./article-content";
import ArticlesList from "../components/article-list/article-list.component";

const ArticleListPage = () => {
  return (
    <div>
      <h1>Articles</h1>
      <ArticlesList articles={articles} />
    </div>
  );
};

export default ArticleListPage;
