# This file is used by Rack-based servers to start the application.

require ::File.expand_path('../config/environment', __FILE__)

require 'faye'
bayeux = Faye::RackAdapter.new(:mount => '/designs/:id', :timeout => 25)

run bayeux

run Rails.application
