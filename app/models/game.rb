class Game < ApplicationRecord
    has_many :reviews,dependent: :destroy
    has_many :users, through: :reviews,dependent: :destroy
    has_many :carts,dependent: :destroy
    has_many :users,through: :carts,dependent: :destroy
    has_many :images,dependent: :destroy
    has_many :features,dependent: :destroy

    validates :name, presence: true, uniqueness: true
    validates :image, presence: true
    validates :price,presence:true,numericality: { greater_than: 0 }
    validates :game_type, presence: true
end
