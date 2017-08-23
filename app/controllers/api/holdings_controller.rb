class Api::HoldingsController < ApplicationController
  def destroy
    @holding = Holding.find(params[:id])
    @holding.destroy
    render json: @holding.id
  end
end
