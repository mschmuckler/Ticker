import React from 'react'
import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';

class ArticleShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.articleId);
  }

  render() {
    if (this.props.articles[this.props.match.params.articleId] === undefined ||
        this.props.articles[this.props.match.params.articleId].body === undefined) {
      return (
        <p id="article-show" >Loading...</p>
      );
    } else {
      const article = this.props.articles[this.props.match.params.articleId];
      const {
        title,
        summary,
        body,
        author,
        authorAvatar,
        tickerTag,
        timeAgo,
      } = article;

      const summaries = summary.map((summaryPoint, idx) => {
        return <li key={ idx } >{ summaryPoint }</li>;
      });

      return (
        <article id="article-show" >
          <header id="article-show-header" >
            <div id="article-show-title-box" >
              <h1>{ title }</h1>
              <div>
                <p>{ timeAgo + ' ago' }</p>
                <p>{ 'About: ' }
                  <Link to={ `/stock/${tickerTag}` } >
                    <span id="about-ticker-link" >{ tickerTag }</span>
                  </Link>
                </p>
              </div>
            </div>
            <div id="article-show-author-box" >
              <div id="article-show-author-img" >
                <img src={ authorAvatar } />
              </div>
              <p>{ author }</p>
            </div>
          </header>
          <section id="article-show-body" >
            <h2>Summary</h2>
            <ul id="article-show-summary" >{ summaries }</ul>
            <p>
              { renderHTML(body) }
            </p>
          </section>
        </article>
      );
    }
  }
}

export default ArticleShow;
