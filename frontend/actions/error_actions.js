export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const receiveErrors = (errors, errorType) => {
  return {
    type: RECEIVE_ERRORS,
    errorType,
    errors,
  };
};

export const clearError = (errorType) => {
  return {
    type: CLEAR_ERROR,
    errorType,
  };
};
