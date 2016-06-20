class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.text :content
      t.integer :artist_id
      t.integer :design_id

      t.timestamps null: false
    end
  end
end
