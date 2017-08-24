class Api::HoldingsController < ApplicationController
  def create
    @holding = Holding.new(holding_params)
    @holding.user_id = current_user.id
    if @holding.save
      render :show
    else
      @errors = @holding.errors.full_messages
      render json: @errors, status: 422
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
