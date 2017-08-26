import React from 'react';
import ArticleIndexItem from './article_index_item';

class ArticleIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArticles(this.props.ticker);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.ticker !== this.props.ticker) {
      this.props.fetchArticles(newProps.ticker);
    }
  }

  render() {
    const allArticles = Object.values(this.props.articles).map((article, idx) => {
      return <ArticleIndexItem key={ idx } article={ article } />;
    });

    return (
      <section id="article-index-section" >
        <ul>{ allArticles }</ul>
      </section>
    );
  }
};

export default ArticleIndex;
