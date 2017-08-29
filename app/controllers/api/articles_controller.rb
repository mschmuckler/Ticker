class Api::ArticlesController < ApplicationController
  def index
    @articles = Article
      .includes(:user)
      .where('ticker_tag = ?', params[:ticker])
      .order('created_at desc')
    render :index
  end

  def search
    search_param = params[:searchInput] == '' ? '' : "#{params[:searchInput]}%"

    @articles = Article
      .includes(:user)
      .joins("INNER JOIN companies ON companies.ticker = articles.ticker_tag")
      .joins("INNER JOIN users ON users.id = articles.user_id")
      .where("title ILIKE :searchInput
              OR ticker_tag ILIKE :searchInput
              OR name ILIKE :suffixSearch
              OR username ILIKE :searchInput",
        {searchInput: search_param, suffixSearch: '%' + search_param})

    render :index
  end

  def show
    @article = Article.find(params[:id])
    render :show
  end

  def create
    @article = Article.new(article_params)
    @article.user_id = current_user.id
    @ticker_exists = Company.find_by(ticker: @article.ticker_tag)

    if @ticker_exists
      if @article.save
        render :show
      else
        @errors = @article.errors.full_messages
        render json: @errors, status: 400
      end
    else
      render json: ["No such company exists"], status: 404
    end
  end

  private

  def article_params
    params.require(:article).permit(:title, :body, :ticker_tag, summary: [])
  end
end
