class Article < ApplicationRecord
  validates :title, :body, :ticker_tag, :user_id, presence: true

  belongs_to :user
end
