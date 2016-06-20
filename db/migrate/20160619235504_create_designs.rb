class CreateDesigns < ActiveRecord::Migration
  def change
    create_table :designs do |t|
      t.text :canvas_data
      t.text :url

      t.timestamps null: false
    end
  end
end
