class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.string :sport, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.integer :distance, null: false
      t.date :date, null: false
      t.integer :duration, null: false
      t.integer :user_id, null: false
      t.integer :route_id

      t.timestamps
    end
      add_index :activities, :user_id
      add_index :activities, :route_id
  end
end
