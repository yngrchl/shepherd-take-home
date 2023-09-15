class CreateCompanyApps < ActiveRecord::Migration[7.0]
  def change
    create_table :company_apps do |t|
      t.integer :type_id, default: 0
      t.string :company_name
      t.string :ceo
      t.string :website
      t.string :address1
      t.string :address2
      t.string :city
      t.boolean :is_california_relevant
      t.integer :total_compensation

      t.timestamps
    end
  end
end
