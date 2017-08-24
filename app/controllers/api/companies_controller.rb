class Api::CompaniesController < ApplicationController
  def index
    @companies = Company
      .where("ticker LIKE ? OR name LIKE ?",
      {searchInput: "#{params[:searchInput]}%"})
    render :index
  end
end
