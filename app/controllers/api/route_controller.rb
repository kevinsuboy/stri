class Api::RouteController < ApplicationController
    def index
        @routes = Route.where(user_id: params[:user_id])
        # debugger
        render :index
    end
end
