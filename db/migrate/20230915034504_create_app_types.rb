class CreateAppTypes < ActiveRecord::Migration[7.0]
  def change
    create_table :app_types do |t|
      t.integer :type_id
      t.string :name

      t.timestamps
    end
  end
end