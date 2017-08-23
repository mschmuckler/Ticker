class CreateCompanies < ActiveRecord::Migration[5.0]
  def change
    create_table :companies do |t|
      t.string :ticker, null: false
      t.string :name, null: false
      t.string :exchange
      t.string :industry
      t.string :sector

      t.timestamps
    end

    add_index :companies, :ticker
    add_index :companies, :name
  end
end
