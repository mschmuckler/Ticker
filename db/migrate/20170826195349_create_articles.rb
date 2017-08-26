class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.string :title, null: false
      t.text :summary, array: true, default: []
      t.text :body, null: false
      t.string :ticker_tag, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :articles, :user_id
    add_index :articles, :ticker_tag
  end
end
