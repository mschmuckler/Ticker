export const requestArticles = (ticker) => {
  return $.ajax({
    method: "GET",
    url: `/api/articles`,
    data: { ticker },
  });
};
