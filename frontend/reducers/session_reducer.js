import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const initialState = {
  currentUser: null,
};

export default (state = initialState, action) => {
  Object.freeze(state);

  let currentUser;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser;
    default:
      return state;
  }
};
