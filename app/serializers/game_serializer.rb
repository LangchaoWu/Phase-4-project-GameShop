class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :image,:game_type
  has_many :images
  has_many :features
  has_many :reviews
  
end
