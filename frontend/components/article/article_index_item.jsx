import React from 'react';

const ArticleIndexItem = (props) => {
  return (
    <li className="article-index-item" >
      <div className="article-item-img" ></div>
      <div className="article-item-info" >
        <p className="article-item-title" >{ props.article.title }</p>
        <div>
          <p>{ props.article.author }</p>
          <span className="bullet-separator" ></span>
          <p>{ props.article.time_ago + ' ago' }</p>
        </div>
      </div>
    </li>
  );
};

export default ArticleIndexItem
