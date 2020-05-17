import React from "react";
import articles from "./article-content";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const articleContent = articles.find((article) => article.name === name);
  if (!articleContent) return <h1>Article does not exist!</h1>;
  return (
    <div>
      <h1>{articleContent.title}</h1>
      {articleContent.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
    </div>
  );
};

export default ArticlePage;
