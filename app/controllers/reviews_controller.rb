class ReviewsController < ApplicationController
    def index
        render json: Review.all 
    end

    def show
        review = Review.find_by(id: params[:id])
        if review
            render json: review
       else
           render json: {error: "review not found"} , status: :not_found
       end
    end 
end
