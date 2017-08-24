json.array!(@companies) do |company|
  json.ticker company.ticker
  json.name company.name
end
