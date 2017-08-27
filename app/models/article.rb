class Article < ApplicationRecord
  validates :title, :summary, :body, :ticker_tag, :user_id, presence: true

  belongs_to :user
end
