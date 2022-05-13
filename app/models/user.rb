class User < ApplicationRecord
    has_secure_password
    
    has_many :reviews, dependent: :destroy
    has_many :games, through: :reviews,dependent: :destroy

    has_many :carts,dependent: :destroy
    has_many :games,through: :carts,dependent: :destroy

    validates :username, presence: true, uniqueness: true
   
end
