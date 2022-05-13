class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  # before_action :authorize_user
  # # Group Activity => Add Method (current_user) To Confirm Current User via Session
  # def current_user
  #     user.find_by(id: session[:current_user])
  # end
  

  # # Group Activity => Add Method (authorize_user)
  # def authorize_user
  #     return  render json: {"Not Authroized"},status: :unauthorized unless current_user
  # end
  #     # - Return JSON error message of "Not Authorized" unless current_user is 'true' (authorized).  

  #     # - Add 'before_action' for authorize_user

  # # Group Activity => Add Method (is_admin)
  # def is_admin
  #     return  render json: {"Not Authroized"},status: :unauthorized unless current_user.admin
  # end
end
