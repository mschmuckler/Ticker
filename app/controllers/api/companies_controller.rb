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

    until @randomStocks.length > 0 && @randomStocks.all? { |stock| stock.exchange != 'DELISTED' }
      @randomStocks = []

      params[:numTimes].to_i.times do
        randomOffset = rand(Company.count)
        @randomStocks.push(Company.offset(randomOffset).first)
      end
    end

    @randomStocks.map! { |stock| stock.ticker }
    render json: @randomStocks
  end

  def show
    @company = Company.find_by(ticker: params[:id])
    render :show
  end
end
