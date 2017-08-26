import { connect } from 'react-redux';
import { fetchArticles } from '../../actions/article_actions';
import ArticleIndex from './article_index';

const mapStateToProps = (state) => {
  return {
    articles: state.entities.articles
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: (ticker) => dispatch(fetchArticles(ticker)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleIndex);
