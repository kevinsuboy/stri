class UpdateActivities < ActiveRecord::Migration[5.2]
  def change
    change_column :activities, :duration, :time, null: false
    change_column :activities, :description, :string,null: true
  end
end
