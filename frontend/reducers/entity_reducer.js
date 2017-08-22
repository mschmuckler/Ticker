import { combineReducers } from 'redux';
import StockReducer from './stock_reducer';


const EntityReducer = combineReducers({
  stocks: StockReducer,
});

export default EntityReducer;
