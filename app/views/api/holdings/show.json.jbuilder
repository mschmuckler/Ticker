json.holdings do
  json.set!(@holding.id) do
    json.id @holding.id
    json.ticker @holding.ticker
  end
end
