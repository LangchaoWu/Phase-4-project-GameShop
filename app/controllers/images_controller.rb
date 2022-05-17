class ImagesController < ApplicationController
    def create
        image=Image.create(image_params)
        if image.valid?
            render json: image, status: :created
        else
            render json: {error: image.errors.full_messages},status: :unprocessable_entity 
        end    
    end

    def destroy
        image = Image.find_by(id:params[:id])
        if image
            image.destroy
            head :no_content
        else
            render json: {error: "Image not found"} , status: :not_found
        end
        
    end

    private

    def image_params
        params.permit(:imgurl,:game_id)
    end
end
