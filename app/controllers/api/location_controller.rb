class Api::LocationController < ApplicationController
    def index
        @parentId_arr = []
        if params[:route_id] != "undefined"
            @locations = Location.where(route_id: params[:route_id])
            @parentId_arr.push(params[:route_id].to_i)
        elsif  params[:activity_id] != "undefined"
            @locations = Location.where(activity_id: params[:activity_id])
            @parentId_arr.push(params[:activity_id].to_i)
        end
        # debugger
        render :index
    end
end
