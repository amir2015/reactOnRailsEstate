class Api::PropertiesController < ApplicationController
def index
render json: Property.available
end
def show
render json: Property.all
end
end
