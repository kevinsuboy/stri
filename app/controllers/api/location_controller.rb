class Api::LocationController < ApplicationController
    def index
        @locations = Location.where(route_id: params[:route_id]).order("order asc")
        
    end
end
