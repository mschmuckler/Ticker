export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receieveErrors = (errors, errorType) => {
  return {
    type: RECEIVE_ERRORS,
    currentUser: {},
    errorType: errorType,
    errors: errors,
  };
};
