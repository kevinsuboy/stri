class AddDurRoutesCol < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :estimated_duration, :time
  end
end
