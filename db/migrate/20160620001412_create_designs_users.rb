class CreateDesignsUsers < ActiveRecord::Migration
  def change
    create_table :designs_users do |t|
      t.integer :design_id
      t.integer :user_id

    end
  end
end
