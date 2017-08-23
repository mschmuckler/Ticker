class AddUniquenessToHoldings < ActiveRecord::Migration[5.0]
  def change
    add_index :holdings, [:user_id, :ticker], unique: true
  end
end
