class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating,:user,:game
  
end
