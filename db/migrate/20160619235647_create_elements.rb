class CreateElements < ActiveRecord::Migration
  def change
    create_table :elements do |t|
      t.text :element_type
      t.text :element_data
      t.integer :artist_id

      t.timestamps null: false
    end
  end
end
