import React from 'react';

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
      return <li key={ idx } >
        <p>{article.title}</p>
        <p>{article.summary}</p>
        <p>{article.body}</p>
      </li>
    });

    return (
      <section id="article-index-section" >
        <ul>{ allArticles }</ul>
      </section>
    );
  }
};

export default ArticleIndex;
