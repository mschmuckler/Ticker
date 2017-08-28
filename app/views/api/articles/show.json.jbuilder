json.set!(@article.id) do
  json.id @article.id
  json.title @article.title
  json.summary @article.summary
  json.body @article.body
  json.tickerTag @article.ticker_tag
  json.author @article.user.username
  json.authorAvatar asset_path(@article.user.avatar.url)
  json.timeAgo time_ago_in_words(@article.created_at)
end
