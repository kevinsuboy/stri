class Api::ActivityController < ApplicationController
    def index
        if params[:user_id] != "undefined"
            @activities = Activity.where(user_id: params[:user_id])
        else
            @activities = Activity.all
        end
        # debugger
        render :index
    end
end
