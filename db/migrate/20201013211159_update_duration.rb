class UpdateDuration < ActiveRecord::Migration[5.2]
  def change
    remove_column :activities, :duration
    add_column :activities, :duration, :time
  end
end
