class Api::CompaniesController < ApplicationController
  def index
    debugger
    @companies = Company
      .where("ticker LIKE :searchInput OR name LIKE :searchInput",
      {searchInput: "#{params[:searchInput]}%"})
    render :index
  end
end
