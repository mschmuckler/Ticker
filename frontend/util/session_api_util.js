export const signup = (formData) => {
  return $.ajax({
    method: "POST",
    url: `/api/users`,
    contentType: false,
    processData: false,
    data: formData,
  });
};

export const login = (user) => {
  return $.ajax({
    method: "POST",
    url: `/api/session`,
    data: { user: user },
  });
};

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: `/api/session`,
  });
};

export const requestHoldings = (userId) => {
  return $.ajax({
    method: "GET",
    url: `/api/holdings`,
  });
};
