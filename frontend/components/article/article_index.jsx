import React from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import ArticleIndexItem from './article_index_item';

class ArticleIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArticles(this.props.ticker);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.ticker !== this.props.ticker) {
      this.props.fetchArticles(nextProps.ticker);
    }
  }

  render() {
    let allArticles = Object.values(this.props.articles).reverse().map((article, idx) => {
      if (article.tickerTag === this.props.ticker) {
        return <ArticleIndexItem key={ idx } article={ article } />;
      }
    });

    allArticles = allArticles.filter(article => {
      return article !== undefined;
    });

    if (isEmpty(allArticles)) {
      return (
        <div id="no-article-message" >
          <p>
            It looks like there are no articles for this stock. Have some thoughts to share?
          </p>
          <Link to={ `/article/new/${this.props.ticker}` } >
            <span className="article-write-btn" >Write about { this.props.ticker }</span>
          </Link>
        </div>
      );
    } else {
      return (
        <section id="article-index-section" >
          <ul>{ allArticles }</ul>
          <div className="article-footer" >          
            <Link to={ `/article/new/${this.props.ticker}` } >
              <span className="article-write-btn" >Write about { this.props.ticker }</span>
            </Link>
          </div>
        </section>
      );
    }
  }
};

export default ArticleIndex;
