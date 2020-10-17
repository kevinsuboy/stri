class RestoreRoutesIndex < ActiveRecord::Migration[5.2]
  def change
      add_index :activities, :route_id
  end
end
