class CreateAutoApps < ActiveRecord::Migration[7.0]
  def change
    create_table :auto_apps do |t|
      t.integer :type_id, default: 2
      t.string :vin
      t.string :make

      t.timestamps
    end
  end
end
