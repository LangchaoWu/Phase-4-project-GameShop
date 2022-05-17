class CartsController < ApplicationController
    def index
        render json: Cart.all 
    end

    def show
        cart = Cart.find_by(id: params[:id])
        if cart
            render json: game
       else
           render json: {error: "Game not found"} , status: :not_found
       end
    end 

    def create
        cart=Cart.create(cart_params)
        if cart.valid?
            render json: cart, status: :created
        else
            render json: {error: cart.errors.full_messages},status: :unprocessable_entity 
        end    
    end

    def destroy
        cart = Cart.find_by(id:params[:id])
        if cart
            cart.destroy
            head :no_content
        else
            render json: {error: "Game not found"} , status: :not_found
        end
        
    end

    private

    def cart_params
        params.permit(:user_id, :game_id)
    end
end
