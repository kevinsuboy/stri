class ChangeRoutesDistance < ActiveRecord::Migration[5.2]
  def change
    change_column :routes, :distance, :float
  end
end
