class Api::RouteController < ApplicationController
    def index
        if params[:user_id] != "undefined"
            @routes = Route.where(user_id: params[:user_id])
        else
            @routes = Route.all
        end
        # debugger
        render :index
    end
end
