class Api::ActivityController < ApplicationController
    def index
        if params[:user_id] != "undefined"
            @activities = Activity.where(user_id: params[:user_id])
        else
            @activities = Activity.all
        end
        # debugger
        if params[:recentDays] && params[:recentDays] != ""
            start_date = Date.today - params[:recentDays].to_i
            # debugger
            @activities = @activities.where("date > (?)", start_date)
        end
        if params[:sport] && params[:sport] != ""
            @activities = @activities.where("sport = (?)", params[:sport])
        end
        # debugger
        if params[:keywords] && params[:keywords] != ""
            @activities = @activities.where("title ilike ?", "%#{params[:keywords]}%")
        end
        render :index
    end
    def show
        # debugger
        @activity = Activity.find(params[:id])
        render :show
    end
end
