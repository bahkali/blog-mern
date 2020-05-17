import React from "react";
import articles from "./article-content";
import ArticlesList from "../components/article-list/article-list.component";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const articleContent = articles.find((article) => article.name === name);
  if (!articleContent) return <h1>Article does not exist!</h1>;
  const otherArticles = articles.filter((article) => article.name !== name);
  return (
    <div>
      <h1>{articleContent.title}</h1>
      {articleContent.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </div>
  );
};

export default ArticlePage;
