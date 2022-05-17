class Image < ApplicationRecord
  belongs_to :game
  validates :imgurl, presence: true
end
