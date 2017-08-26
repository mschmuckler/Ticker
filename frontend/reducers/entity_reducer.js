import { combineReducers } from 'redux';
import StockReducer from './stock_reducer';
import CompanyReducer from './company_reducer';
import ArticleReducer from './article_reducer';


const EntityReducer = combineReducers({
  stocks: StockReducer,
  companies: CompanyReducer,
  articles: ArticleReducer,
});

export default EntityReducer;
