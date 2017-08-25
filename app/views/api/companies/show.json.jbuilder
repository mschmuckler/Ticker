json.set!(@company.ticker) do
  json.ticker @company.ticker
  json.name @company.name
  json.exchange @company.exchange
  json.industry @company.industry
  json.sector @company.sector
end
