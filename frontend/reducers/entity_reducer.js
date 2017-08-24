import { combineReducers } from 'redux';
import StockReducer from './stock_reducer';
import CompanyReducer from './company_reducer';


const EntityReducer = combineReducers({
  stocks: StockReducer,
  companies: CompanyReducer,
});

export default EntityReducer;
