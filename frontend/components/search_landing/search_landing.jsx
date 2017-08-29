import React from 'react';
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
      return <li key={ idx } >{ company.name }</li>
    });

    return (
      <div id="search-landing" >
        <ul>{ articles }</ul>
        <ul>{ companies }</ul>
      </div>
    );
  }
}

export default SearchLanding;
