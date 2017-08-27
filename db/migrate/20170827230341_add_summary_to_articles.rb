class AddSummaryToArticles < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :summary, :string, array: true, null: false
  end
end
