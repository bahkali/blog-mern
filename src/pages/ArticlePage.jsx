import React, { useState, useEffect } from "react";
import articles from "./article-content";
import ArticlesList from "../components/article-list/article-list.component";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const articleContent = articles.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({
    upvotes: 0,
    comments: [],
  });

  useEffect(() => {
    setArticleInfo({ upvotes: Math.ceil(Math.random() * 10) });
    //const fetchData = async ()=> {
    //  const result = await fetch(`http://localhost:8000/api/articles/${name}`);
    //  const body = await result.json();
    //  setArticleInfo(body);
    //}
  }, [name]);

  if (!articleContent) return <NotFoundPage />;
  const otherArticles = articles.filter((article) => article.name !== name);

  return (
    <div>
      <h1>{articleContent.title}</h1>
      <p>This post has been upvotes {articleInfo.upvotes}</p>
      {articleContent.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </div>
  );
};

export default ArticlePage;
