json.id user.id
json.username user.username
json.holdings do
  user.holdings.each do |holding|
    json.set!(holding.id) do
      json.id holding.id
      json.ticker holding.ticker
    end
  end
end
