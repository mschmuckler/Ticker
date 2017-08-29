import React from 'react';
import { Link } from 'react-router-dom';
import ArticleIndexItem from '../article/article_index_item';

class SearchLanding extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.searchType === "nav") {
      return true;
    } else {
      return false;
    }
  }

  render() {
    let articles = this.props.articleIds.map((articleId, idx) => {
      return <ArticleIndexItem
        key={ idx }
        article={ this.props.articles[articleId] }
      />
    });

    const companies = Object.values(this.props.companies).map((company, idx) => {
      return <li key={ idx } className="search-company-item" >
        <Link to={ `/stock/${company.ticker}` } >
          <p className="search-company-item-ticker" >{ company.ticker }</p>
        </Link>
        <p className="search-company-item-name" >{ company.name }</p>
      </li>;
    });

    return (
      <div id="search-landing" >
        <section id="search-article-section" >
          <h2>Articles</h2>
          <ul>{ articles }</ul>
        </section>
        <section id="search-company-section" >
          <h2>Companies</h2>
          <ul>{ companies }</ul>
        </section>
      </div>
    );
  }
}

export default SearchLanding;
