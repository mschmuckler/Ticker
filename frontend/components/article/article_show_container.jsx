import { connect } from 'react-redux';
import { fetchArticle } from '../../actions/article_actions';
import ArticleShow from './article_show';

const mapStateToProps = (state) => {
  return {
    articles: state.entities.articles
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticle: (ticker) => dispatch(fetchArticle(ticker)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleShow);
