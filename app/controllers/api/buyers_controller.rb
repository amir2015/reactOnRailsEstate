class Api::BuyersController < ApplicationController
  def show
    buyer = Buyer.find(params[:id])
    render json: Buyer.my_homes(buyer.id, buyer.cities)
  end
  def show1
    buyer = Buyer.find(params[:id])
    render json: buyer.my_homes
end
end
