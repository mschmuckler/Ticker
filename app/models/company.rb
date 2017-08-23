class Company < ApplicationRecord
  validates :ticker, :name, presence: true
end
