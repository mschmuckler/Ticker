class Api::ArticlesController < ApplicationController
  def index
    @articles = Article.where('ticker_tag = ?', params[:ticker])
    render :index
  end

  def show
  end

  def create
  end
end
