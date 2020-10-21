class ChangeActivitiesDuration < ActiveRecord::Migration[5.2]
  def change
    change_column :activities, :distance, :float
  end
end
