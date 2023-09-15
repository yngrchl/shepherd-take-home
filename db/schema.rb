# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_09_15_035416) do
  create_table "app_types", force: :cascade do |t|
    t.integer "type_id"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "articles", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "auto_apps", force: :cascade do |t|
    t.integer "type_id", default: 2
    t.string "vin"
    t.string "make"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "company_apps", force: :cascade do |t|
    t.integer "type_id", default: 0
    t.string "company_name"
    t.string "ceo"
    t.string "website"
    t.string "address1"
    t.string "address2"
    t.string "city"
    t.boolean "is_california_relevant"
    t.integer "total_compensation"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "employee_apps", force: :cascade do |t|
    t.integer "type_id", default: 1
    t.string "applicant_name"
    t.string "applicant_title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
