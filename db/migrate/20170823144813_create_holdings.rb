class CreateHoldings < ActiveRecord::Migration[5.0]
  def change
    create_table :holdings do |t|
      t.string :ticker, null: false
      t.integer :user_id, null: false

      t.timestamps
    end

    add_index :holdings, :ticker
    add_index :holdings, :user_id
  end
end
