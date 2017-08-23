class Holding < ApplicationRecord
  validates :ticker, :user_id, presence: true
  validates :ticker, uniqueness: { scope: :user_id }
end
