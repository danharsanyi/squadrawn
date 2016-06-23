class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :fetch_user

  def authorize_admin
    redirect_to designs_path unless @current_user.admin
    #redirects to previous page
  end

  private
  def fetch_user

      @current_user = User.find_by( :id => session[:user_id] )
      session[:user_id] = nil unless @current_user

  end
end
