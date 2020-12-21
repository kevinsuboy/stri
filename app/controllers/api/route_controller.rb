class Api::RouteController < ApplicationController
    def index
        # debugger
        if params[:user_id] != "undefined"
            @routes = Route.where(user_id: params[:user_id])
        else
            @routes = Route.all
        end
        @routes = @routes.order("created_at desc")
        if params[:recentDays] && params[:recentDays] != ""
            start_date = Date.today - params[:recentDays].to_i
            # debugger
            @routes = @routes.where("created_at > (?)", start_date)
        end
        # debugger
        if params[:keywords] && params[:keywords] != ""
            @routes = @routes.where("name ilike ?", "%#{params[:keywords]}%")
        end
        @cnt = @routes.length;
        if params[:cnt] && params[:offset] && params[:cnt] != ""
            @routes = @routes.limit(params[:cnt]).offset(params[:offset])
        end
        render :index
    end
    def show
        @route = Route.find(params[:id])
        # debugger
        render :show
    end
    def update
        # debugger
        @route = Route.find_by(id:params[:id])
        if @route.update(route_params)
            render :show
        else
            render json: @route.errors.full_messages, status: 422
        end
    end
    def destroy
        @route = Route.find_by(id:params[:id])
        if @route.destroy
            render :show
        else
            render json: @route.errors.full_messages, status: 422
        end
    end
    def create
        @route = Route.new(route_params)
        user = User.find_by(id:params[:userId])
        # debugger
        @route.user_id = user.id
        if @route.save
            render :show
        else
            render json: @route.errors.full_messages, status: 422
        end
    end
    private
    def route_params
        params.permit(:name, :description, :distance,:estimated_duration)
    end
end
