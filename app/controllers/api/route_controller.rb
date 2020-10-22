class Api::RouteController < ApplicationController
    def index
        # debugger
        if params[:user_id] != "undefined"
            @routes = Route.where(user_id: params[:user_id])
        else
            @routes = Route.all
        end
        if params[:recentDays] && params[:recentDays] != ""
            start_date = Date.today - params[:recentDays].to_i
            # debugger
            @routes = @routes.where("updated_at > (?)", start_date)
        end
        # debugger
        if params[:keywords] && params[:keywords] != ""
            @routes = @routes.where("name ilike ?", "%#{params[:keywords]}%")
        end
        render :index
    end
    def show
        # debugger
        @route = Route.find(params[:id])
        render :show
    end
end
