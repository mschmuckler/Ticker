class AddNotNullToArticlesSummary < ActiveRecord::Migration[5.0]
  def change
    change_column :articles, :summary, :string, null: false
  end
end
