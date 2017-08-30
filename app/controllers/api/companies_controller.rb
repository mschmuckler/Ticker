class Api::CompaniesController < ApplicationController
  def index
    search_param = params[:searchInput] == '' ? '' : "#{params[:searchInput]}%"

    @companies = Company
      .where("ticker ILIKE :searchInput OR name ILIKE :searchInput",
        { searchInput: search_param })
      .limit(15)

    render :index
  end

  def random
    @randomStocks = []

    10.times do
      randomOffset = rand(Company.count)
      @randomStocks.push(Company.offset(randomOffset).first.ticker)
    end

    render json: @randomStocks
  end

  def show
    @company = Company.find_by(ticker: params[:id])
    render :show
  end
end
