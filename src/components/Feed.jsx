import { useEffect, useState } from "react";
import "../assets/css/Feed.css";

function Feed() {
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("https://conduit.productionready.io/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));

    fetch("https://conduit.productionready.io/api/tags")
      .then((response) => response.json())
      .then((data) => setTags(data.tags));
  }, []);

  return (
    <div className="feed-container">
      <div className="feed">
        <span className="global">Global Feed</span>
        {articles?.map((article) => (
          <div key={article.slug} className="article">
            <div className="article-header">
              <img
                src={article.author.image}
                alt={article.author.username}
                className="author-image"
              />
              <div className="author-info">
                <p className="author-name">{article.author.username}</p>
                <p className="article-date">
                  {new Date(article.createdAt).toDateString()}
                </p>
              </div>
              <div className="article-favorites">
                <button className="favorite-button">
                  ❤ {article.favoritesCount}
                </button>
              </div>
            </div>
            <div className="article-content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
            <div className="article-footer">
              <a href={`/article/${article.slug}`} className="read-more">
                Read more...
              </a>
              <div className="article-tags">
                {article.tagList?.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="sidebar">
        <p>Popular Tags</p>
        <div className="tags">
          {tags?.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feed;
