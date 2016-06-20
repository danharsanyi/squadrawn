class User < ActiveRecord::Base
  has_and_belongs_to_many :designs
  has_many :orders
  has_many :messages
  has_many :elements

  has_secure_password

end
