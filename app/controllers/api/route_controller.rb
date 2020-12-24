class Api::RouteController < ApplicationController
    def index
        # debugger
        if params[:user_id] != "undefined"
            @routes = Route.where(user_id: params[:user_id]).order("created_at desc")
        else
            @routes = Route.all.order("created_at desc")
        end
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
        @route = Route.find_by(id:params[:id])
        @locations = Location.where(route_id: params[:id]).order(:order)
        @locations.each do |loc|
            pLoc = params[:locations][loc[:order].to_s];
            if !pLoc
                #! handle deletes
                loc.destroy
                # debugger
            elsif !loc.update(loc_params(pLoc))
                render json: loc.errors.full_messages, status: 422
            end
        end
        # debugger
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
    def loc_params(pLoc)
        pLoc.permit(:lat,:lng)
    end
    def route_params
        params.permit(:name, :description, :distance,:estimated_duration)
    end
end
