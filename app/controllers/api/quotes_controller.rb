require 'rest-client'
require 'json'

class Api::QuotesController < ApplicationController
  def show
    stock_data = RestClient.get("http://finance.google.com/finance/info?client=ig&q=#{params[:id]}", headers={})
    render json: stock_data.body[4..-1]
  end
end
