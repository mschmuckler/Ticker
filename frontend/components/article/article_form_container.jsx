import { connect } from 'react-redux';
import { createArticle } from '../../actions/article_actions';
import ArticleForm from './article_form';

const mapDispatchToProps = (dispatch) => {
  return {
    createArticle: (article) => dispatch(createArticle(article)),
  };
};

export default connect(null, mapDispatchToProps)(ArticleForm);
