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

export const requestCreateArticle = (article) => {
  return $.ajax({
    method: "POST",
    url: `/api/articles`,
    data: { article },
  });
};
