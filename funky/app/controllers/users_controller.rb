class UsersController < ApplicationController
  before_filter :signed_in_user, only: [:edit, :update, :destroy]
  before_filter :correct_user, only: [:edit, :update, :destroy]

  def show
    @user = User.find_by_username(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      sign_in @user
      flash[:success]= "Welcome to Funky!"
      redirect_to @user
    else
      render :new
    end
  end

  def edit
    @user = User.find_by_username(params[:id])
  end

  def update
    @user = User.find_by_username(params[:id])
    if @user.update_attributes(params[:user])
      sign_in @user
      flash[:success] = "Profile Updated."
      redirect_to @user
    else
      render :edit
    end
  end

  def destroy
    @user = User.find_by_username(params[:id]).destroy
    flash[:success] = "User destroyed."
    redirect_to root_url
  end

  private

    def correct_user
      redirect_to(root_url) unless signed_in?
      redirect_to(root_url) unless params[:id] == current_user.username
    end
end
