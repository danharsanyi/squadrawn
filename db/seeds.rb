# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Element.destroy_all

e1 = Element.create :element_type => "image", :element_data => "json data goes here", :user_id => 0

e2 = Element.create :element_type => "image", :element_data => "json data goes here", :user_id => 0

e3 = Element.create :element_type => "image", :element_data => "json data goes here", :user_id => 0



# User.destroy_all
#
# u1 = User.create :name => "Craig", :email => "craig@ga.co", :password => "chicken", :password_confirmation => "chicken"
