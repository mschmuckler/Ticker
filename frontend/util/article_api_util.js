export const requestArticles = (ticker) => {
  return $.ajax({
    method: "GET",
    url: `/api/articles`,
    data: { ticker },
  });
};

export const requestArticle = (articleId) => {
  return $.ajax({
    method: "GET",
    url: `/api/articles/${articleId}`,
  });
};
