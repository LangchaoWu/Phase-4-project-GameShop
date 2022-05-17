class FeaturesController < ApplicationController
    def create
        feature=Feature.create(feature_params)
        if feature.valid?
            render json: feature, status: :created
        else
            render json: {error: feature.errors.full_messages},status: :unprocessable_entity 
        end    
    end

    def destroy
        feature = Feature.find_by(id:params[:id])
        if feature
            feature.destroy
            head :no_content
        else
            render json: {error: "Game not found"} , status: :not_found
        end
    end

    private

    def feature_params
        params.permit(:description,:game_id)
    end
end
