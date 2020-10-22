class Api::ActivityController < ApplicationController
    def index
        if params[:user_id] != "undefined"
            @activities = Activity.where(user_id: params[:user_id])
        else
            @activities = Activity.all
        end
        if params[:recentDays] != ""
            start_date = Date.today - params[:recentDays].to_i
            # debugger
            @activities = @activities.where("date > (?)", start_date)
        end
        # debugger
        render :index
    end
end
