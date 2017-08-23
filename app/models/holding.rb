class Holding < ApplicationRecord
  validates :ticker, :user_id, presence: true
end
