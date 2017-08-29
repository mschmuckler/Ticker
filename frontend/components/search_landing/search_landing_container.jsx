import { connect } from 'react-redux';
import { merge } from 'lodash';
import SearchLanding from './search_landing';

const mapStateToProps = (state) => {
  return {
    companies: state.search.companies,
    articles: state.entities.articles,
    articleIds: state.search.articleIds,
    searchType: state.search.searchType,
  };
};

export default connect(mapStateToProps, null)(SearchLanding);
