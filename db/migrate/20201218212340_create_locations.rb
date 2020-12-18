class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.decimal :lat, null: false
      t.decimal :lng, null: false 
      t.integer :route_id, null: false 
      t.integer :order, null: false 
      t.timestamps
    end
  end
end
