class Api::CompaniesController < ApplicationController
  def index
    search_param = params[:searchInput] == '' ? '' : "#{params[:searchInput].upcase}%"

    @companies = Company
      .where("ticker LIKE :searchInput OR name LIKE :searchInput",
        { searchInput: search_param })
      .limit(15)

    render :index
  end

  def show
    @company = Company.find_by(ticker: params[:id])
    render :show
  end
end
