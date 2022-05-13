class UsersController < ApplicationController
 
    # Skip_before_action :authorize_user, only:[:create]


    # GET "/users"
    def index 
        render json: User.all
    end 

    # GET "/users/:id"
    def show
        current_user = User.find_by(id: session[:current_user])
        if current_user
            render json: current_user,status: :ok
       else
           render json: {error: "user not found"} , status: :not_found
       end
    end 

    # POST "/users"
    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: {error: user.errors.full_messages},status: :unprocessable_entity 
        end
    
    end 

    # PUT "/users/:id"
    def update
        user = User.find_by(id:params[:id])
        user.update!(user_params)
        render json: user, status: :created
    end

    # DELETE "/users/:id"
    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private 

    def user_params
        params.permit(:username,:password,:admin)
    end 



end
