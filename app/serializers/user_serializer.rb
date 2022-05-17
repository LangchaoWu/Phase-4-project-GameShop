class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :admin
  has_many :carts
  has_many :reviews
end
