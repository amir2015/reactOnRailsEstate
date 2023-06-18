class Api::AgentsController < ApplicationController
  def index
    render json: Agent.unsold_homes
  end

  def show_buyers
    @agent = Agent.find(params[:id])
    render json: @agent.buyers
  end
end
