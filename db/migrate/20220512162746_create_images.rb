class CreateImages < ActiveRecord::Migration[6.1]
  def change
    create_table :images do |t|
      t.string :imgurl
      t.belongs_to :game, null: false, foreign_key: true

      t.timestamps
    end
  end
end
