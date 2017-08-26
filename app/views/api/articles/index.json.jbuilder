@articles.each do |article|
  json.set!(article.id) do
    json.id article.id
    json.title article.title
    json.summary article.summary
    json.body article.body
    json.ticker_tag article.ticker_tag
    json.author article.user.username
    json.time_ago time_ago_in_words(article.created_at)
  end
end
