import React from 'react';
import { Link } from 'react-router-dom';

const ArticleIndexItem = (props) => {
  return (
    <li className="article-index-item" >
      <div className="article-item-img" ></div>
      <div className="article-item-info" >
        <Link to={ `/articles/${props.article.id}` } >
          <p className="article-item-title" >{ props.article.title }</p>
        </Link>
        <div>
          <p>{ props.article.author }</p>
          <span className="bullet-separator" ></span>
          <p>{ props.article.timeAgo + ' ago' }</p>
        </div>
      </div>
    </li>
  );
};

export default ArticleIndexItem
