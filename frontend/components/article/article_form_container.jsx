import { connect } from 'react-redux';
import { createArticle } from '../../actions/article_actions';
import { clearError } from '../../actions/error_actions';
import ArticleForm from './article_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.addArticle
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createArticle: (article) => dispatch(createArticle(article)),
    clearError: (errorType) => dispatch(clearError(errorType)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleForm);
