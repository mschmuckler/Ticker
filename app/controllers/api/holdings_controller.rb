class Api::HoldingsController < ApplicationController
  def destroy
    @holding = Holding.find(params[:id])
    render json: { holdingId: @holding.id }
  end
end
