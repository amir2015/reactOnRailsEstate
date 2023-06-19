class Api::PropertiesController < ApplicationController
  before_action :set_page, only: [:city]

  def index
    render json: Property.available
  end

  def show
    render json: Property.all
  end

  def cities
    render json: Address.cities
  end

  def city
    properties = Property.page(@page).city(params[:city])
    total_pages = properties.total_pages
    render json:{properties: properties,total_pages: total_pages}
  end
  def city_cost
    render json: Property.city_cost
  end
  def set_page
    @page=params[:page] ||1
  end
end
