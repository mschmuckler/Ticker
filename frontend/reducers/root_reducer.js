import { combineReducers } from 'redux';
import EntityReducer from './entity_reducer';
import SessionReducer from './session_reducer';
import SearchReducer from './search_reducer';
import ErrorReducer from './error_reducer';

const RootReducer = combineReducers({
  entities: EntityReducer,
  session: SessionReducer,
  search: SearchReducer,
  errors: ErrorReducer,
});

export default RootReducer;
