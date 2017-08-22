import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
// import EntityReducer from './entity_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer,
  // entities: EntityReducer,
});

export default RootReducer;
