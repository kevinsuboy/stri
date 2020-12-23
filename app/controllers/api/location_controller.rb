class Api::LocationController < ApplicationController
    def index
        @parentId_arr = []
        if params[:route_id] && params[:route_id] != "undefined"
            @locations = Location.where(route_id: params[:route_id])
            @parentId_arr = [params[:route_id].to_i]
        elsif params[:routeIds] && params[:routeIds] != "undefined"
            @locations = Location.where({route_id: params[:routeIds]})
            @parentId_arr = params[:routeIds].select{|r| r != "totalCnt"}.map{|r| r.to_i}
        end
        # debugger
        render :index
    end
end
