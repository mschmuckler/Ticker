class AddArrayTypeToArticlesSummary < ActiveRecord::Migration[5.0]
  def change
    remove_column :articles, :summary
  end
end
