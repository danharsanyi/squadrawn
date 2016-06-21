class SessionsController < ApplicationController

  before_action :authenticate, :only => [:new]

  def new
  end

  def create
      @current_user = User.find_by( :email => params[:email] )

      if @current_user.present? && @current_user.authenticate( params[:password] )
        session[:user_id] = @current_user.id
        flash[:success] = "Successfully logged in"
        redirect_to designs_path
      else
        flash[:error] = "Invalid email or password"
        redirect_to login_path
      end
  end

  def destroy
    session[:user_id] = nil
    flash[:success] = "Successfully logged out"
    redirect_to login_path
  end

  private
    def authenticate
      redirect_to designs_path if @current_user
    end

end
