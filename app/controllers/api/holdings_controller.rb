class Api::HoldingsController < ApplicationController
  def index
    @holdings = Holding.where(user_id: 1)
  end
end
