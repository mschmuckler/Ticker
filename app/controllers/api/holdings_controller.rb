class Api::HoldingsController < ApplicationController
  def create
    @holding = Holding.new(holding_params)
    @holding.user_id = current_user.id
    @ticker_exists = Company.find_by(ticker: @holding.ticker)

    if @ticker_exists
      if @holding.save
        render :show
      else
        @errors = @holding.errors.full_messages
        render json: ["Company is already in your portfolio"], status: 400
      end
    else
      render json: ["No such company exists"], status: 404
    end
  end

  def destroy
    @holding = Holding.find(params[:id])
    @holding.destroy
    render json: @holding.id
  end

  private

  def holding_params
    params.require(:holding).permit(:ticker)
  end
end
