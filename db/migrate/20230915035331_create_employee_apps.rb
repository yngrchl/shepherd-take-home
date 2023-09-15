class CreateEmployeeApps < ActiveRecord::Migration[7.0]
  def change
    create_table :employee_apps do |t|
      t.integer :type_id, default: 1
      t.string :applicant_name
      t.string :applicant_title

      t.timestamps
    end
  end
end
