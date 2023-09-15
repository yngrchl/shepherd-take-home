# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

AppType.create(type_id: 0, name: "company")
AppType.create(type_id: 1, name: "employee")
AppType.create(type_id: 2, name: "auto")
