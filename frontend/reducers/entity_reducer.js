import { combineReducers } from 'redux';
import StockReducer from './stock_reducer';
import ArticleReducer from './article_reducer';


const EntityReducer = combineReducers({
  stocks: StockReducer,
  articles: ArticleReducer,
});

export default EntityReducer;
