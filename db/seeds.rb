# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

u1 = User.create :name => "Craig", :email => "craig@ga.co", :password => "chicken", :password_confirmation => "chicken"


Element.destroy_all

e1 = Element.create :element_type => "image", :element_data => '{"type":"IMAGE","name":"Box Ribbon","id":3,"value":{"url":"https://colorlib.com/wp/wp-content/uploads/sites/2/2013/10/BoldMedia-flat-logo.png","dimensions":{"w":400,"h":300}}}'

e2 = Element.create :element_type => "image", :element_data => '{"type":"IMAGE","name":"Fox Color","id":3,"value":{"url":"http://www.faceliftdesigns.com/clientuploads/directory/2012_responsive_homeboxes/design.png","dimensions":{"w":400,"h":300}}}'

e3 = Element.create :element_type => "image", :element_data => '{"type":"IMAGE","name":"Cube Maze","id":3,"value":{"url":"http://bashooka.com/wp-content/uploads/2014/06/geometry-design-inspiration-8.jpg","dimensions":{"w":400,"h":300}}}'
