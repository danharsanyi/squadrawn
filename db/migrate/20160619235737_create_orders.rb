class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :artist_id
      t.integer :design_id
      
      t.timestamps null: false
    end
  end
end
