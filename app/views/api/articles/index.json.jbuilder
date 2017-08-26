@articles.each do |article|
  json.set!(article.id) do
    json.id article.id
    json.title article.title
    json.summary article.summary
    json.body article.body
    json.ticker_tag article.ticker_tag
    json.user_id article.user_id
  end
end
