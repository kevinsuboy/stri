class RemoveRoutesIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :activities, name: "index_activities_on_route_id"
  end
end
