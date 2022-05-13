class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :name
      t.float :price
      t.string :image
      t.string :game_type

      t.timestamps
    end
  end
end
