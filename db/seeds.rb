Message.destroy_all

User.destroy_all

u1 = User.create :name => "Nik M", :email => "nik@ga.co", :password => "chicken", :password_confirmation => "chicken", :admin => true

u2 = User.create :name => "Dan H", :email => "dan@ga.co", :password => "chicken", :password_confirmation => "chicken", :admin => true

u3 = User.create :name => "Jeremy A", :email => "jeremy@ga.co", :password => "chicken", :password_confirmation => "chicken", :admin => true

u4 = User.create :name => "Adolf H", :email => "adolf@ga.co", :password => "chicken", :password_confirmation => "chicken"

Element.destroy_all

Element.create :element_type => "image", :element_data => '{"type":"IMAGE","name":"Box Ribbon","id":3,"value":{"url":"https://colorlib.com/wp/wp-content/uploads/sites/2/2013/10/BoldMedia-flat-logo.png","dimensions":{"w":400,"h":300}}}'

Element.create :element_type => "image", :element_data => '{"type":"IMAGE","name":"Fox Color","id":3,"value":{"url":"http://www.faceliftdesigns.com/clientuploads/directory/2012_responsive_homeboxes/design.png","dimensions":{"w":400,"h":300}}}'

Element.create :element_type => "image", :element_data => '{"type":"IMAGE","name":"Cube Maze","id":3,"value":{"url":"http://bashooka.com/wp-content/uploads/2014/06/geometry-design-inspiration-8.jpg","dimensions":{"w":400,"h":300}}}'

Element.create :element_type => "text", :element_data => '{"type":"IMAGE","name":"Box Ribbon","id":3,"value":{"url":"https://colorlib.com/wp/wp-content/uploads/sites/2/2013/10/BoldMedia-flat-logo.png","dimensions":{"w":400,"h":300}}}'

Element.create :element_type => "image", :element_data => '{"type":"IMAGE","name":"Fox Color","id":3,"value":{"url":"http://www.faceliftdesigns.com/clientuploads/directory/2012_responsive_homeboxes/design.png","dimensions":{"w":400,"h":300}}}'

Element.create :element_type => "shape", :element_data => '{"type":"IMAGE","name":"Cube Maze","id":3,"value":{"url":"http://bashooka.com/wp-content/uploads/2014/06/geometry-design-inspiration-8.jpg","dimensions":{"w":400,"h":300}}}'

Element.create :element_type => "shape", :element_data => '{"type":"IMAGE","name":"Box Ribbon","id":3,"value":{"url":"https://colorlib.com/wp/wp-content/uploads/sites/2/2013/10/BoldMedia-flat-logo.png","dimensions":{"w":400,"h":300}}}'

Element.create :element_type => "image", :element_data => '{"type":"IMAGE","name":"Fox Color","id":3,"value":{"url":"http://www.faceliftdesigns.com/clientuploads/directory/2012_responsive_homeboxes/design.png","dimensions":{"w":400,"h":300}}}'

Element.create :element_type => "image", :element_data => '{"type":"IMAGE","name":"Cube Maze","id":3,"value":{"url":"http://bashooka.com/wp-content/uploads/2014/06/geometry-design-inspiration-8.jpg","dimensions":{"w":400,"h":300}}}'

Element.create :element_type => "text", :element_data => '{"type":"IMAGE","name":"Box Ribbon","id":3,"value":{"url":"https://colorlib.com/wp/wp-content/uploads/sites/2/2013/10/BoldMedia-flat-logo.png","dimensions":{"w":400,"h":300}}}'

Element.create :element_type => "text", :element_data => '{"type":"IMAGE","name":"Fox Color","id":3,"value":{"url":"http://www.faceliftdesigns.com/clientuploads/directory/2012_responsive_homeboxes/design.png","dimensions":{"w":400,"h":300}}}'

Element.create :element_type => "image", :element_data => '{"type":"IMAGE","name":"Cube Maze","id":3,"value":{"url":"http://bashooka.com/wp-content/uploads/2014/06/geometry-design-inspiration-8.jpg","dimensions":{"w":400,"h":300}}}'

Element.create :element_type => "shape", :element_data => '{"type":"IMAGE","name":"Cube Maze","id":3,"value":{"url":"http://bashooka.com/wp-content/uploads/2014/06/geometry-design-inspiration-8.jpg","dimensions":{"w":400,"h":300}}}'

Design.destroy_all
