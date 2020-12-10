class Api::ActivityController < ApplicationController
    def index
        if params[:user_id] && params[:user_id] != "undefined"
            @activities = Activity.where(user_id: params[:user_id])
        else
            if params[:route_id] != "undefined"
                @activities = Activity.where(route_id: params[:route_id])
            else
                @activities = Activity.all
            end
        end
        @activities = @activities.order("date desc")
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
        # debugger
        # @activities = @activities.offset(0).limit(10)
        @cnt = @activities.length;
        if params[:cnt] && params[:offset] && params[:cnt] != ""
            @activities = @activities.limit(params[:cnt]).offset(params[:offset])
        end
        # debugger
        render :index
    end
    def show
        # debugger
        @activity = Activity.find(params[:id])
        render :show
    end
    def update
        # debugger
        @activity = Activity.find_by(id:params[:id])
        @activity.update(activity_params)
        render :show
    end
    def destroy
        @activity = Activity.find_by(id:params[:id])
        if @activity.destroy
            render :show
        else
            render json: @activity.errors.full_messages, status: 422
        end
    end
    def create
        @activity = Activity.new(activity_params)
        user = User.find_by(id:params[:userId])
        route = Route.find_by(id:params[:routeId])
        # debugger
        @activity.user_id = user.id if(user)
        @activity.route_id = route.id if(route)
        if @activity.save
            render :show
        else
            debugger
            render json: @activity.errors.full_messages, status: 422
        end
    end
    private
    def activity_params
        params.permit(:sport, :title, :description, :distance,:date,:duration)
    end
end
