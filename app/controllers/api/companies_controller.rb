class Api::CompaniesController < ApplicationController
  def index
    @companies = Company
      .where("ticker LIKE :searchInput OR name LIKE :searchInput",
        {searchInput: "#{params[:searchInput]}%"})
      .limit(10)
    render :index
  end
end
