class GamesController < ApplicationController

    def index
        render json: Game.all 
    end

    def show
        game = Game.find_by(id: params[:id])
        if game
            render json: game
       else
           render json: {error: "Game not found"} , status: :not_found
       end
    end 
    
    def create
        game=Game.create(game_params)
        if game.valid?
            render json: game, status: :created
        else
            render json: {error: game.errors.full_messages},status: :unprocessable_entity 
        end    
    end

    def update
        game = Game.find_by(id:params[:id])
        if game
             game.update(game_params)
            render json: game, status: :created
        else
            render json:{error:" game not found"}, status: :not_found
        end
    end

    def destroy
        game = Game.find_by(id:params[:id])
        if game
            game.destroy
            head :no_content
        else
            render json: {error: "Game not found"} , status: :not_found
        end
        
    end
    private
    def game_params
        params.permit(:name, :price, :image, :game_type)
    end
end
