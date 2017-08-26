@articles.each do |article|
  json.set!(article.id) do
    json.id article.id
    json.title article.title
    json.author article.user.username
    json.timeAgo time_ago_in_words(article.created_at)
  end
end
