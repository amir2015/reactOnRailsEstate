class CreateBuyers < ActiveRecord::Migration[7.0]
  def change
    create_table :buyers do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone
      t.string :email
      t.float :max_price
      t.text :cities
      t.belongs_to :agent, null: false, foreign_key: true

      t.timestamps
    end
  end
end
