export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receieveErrors = (errors, errorType) => {
  return {
    type: RECEIVE_ERRORS,
    currentUser: null,
    errorType: errorType,
    errors: errors,
  };
};
