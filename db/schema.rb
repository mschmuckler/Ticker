# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170827230341) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.string   "title",      null: false
    t.text     "body",       null: false
    t.string   "ticker_tag", null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "summary",    null: false, array: true
    t.index ["ticker_tag"], name: "index_articles_on_ticker_tag", using: :btree
    t.index ["user_id"], name: "index_articles_on_user_id", using: :btree
  end

  create_table "companies", force: :cascade do |t|
    t.string   "ticker",     null: false
    t.string   "name",       null: false
    t.string   "exchange"
    t.string   "industry"
    t.string   "sector"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_companies_on_name", using: :btree
    t.index ["ticker"], name: "index_companies_on_ticker", using: :btree
  end

  create_table "holdings", force: :cascade do |t|
    t.string   "ticker",     null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ticker"], name: "index_holdings_on_ticker", using: :btree
    t.index ["user_id", "ticker"], name: "index_holdings_on_user_id_and_ticker", unique: true, using: :btree
    t.index ["user_id"], name: "index_holdings_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
