class Api::ArticlesController < ApplicationController
  def index
    @articles = Article.includes(:user).where('ticker_tag = ?', params[:ticker])
    render :index
  end

  def show
    @article = Article.find(params[:id])
    render :show
  end

  def create
  end
end
