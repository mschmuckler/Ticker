export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveErrors = (errors, errorType) => {
  return {
    type: RECEIVE_ERRORS,
    currentUser: {},
    errorType: errorType,
    errors: errors,
  };
};
