class AddOrderDetailsToOrders < ActiveRecord::Migration
  def change
      add_column :orders, :product, :text
      add_column :orders, :size, :text
      add_column :orders, :total, :decimal
      add_column :orders, :first_name, :text
      add_column :orders, :last_name, :text
      add_column :orders, :email, :text
      add_column :orders, :phone_number, :text
      add_column :orders, :address_1, :text
      add_column :orders, :address_2, :text
      add_column :orders, :country, :text
      add_column :orders, :city, :text
      add_column :orders, :postcode, :text
  end
end
