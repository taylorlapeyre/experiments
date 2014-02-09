class SnippetsController < ApplicationController
  before_filter :signed_in_user, only: [:edit, :update, :destroy, :new, :create]
  before_filter :correct_user, only: [:edit, :update, :destroy]

  def index
    @snippets = Snippet.all.sort_by { |s| s[:created_at] }.reverse
  end

  def show
    @snippet = Snippet.find_by_slug(params[:id])
  end

  def new
    @snippet = Snippet.new
    @snippet.user_id = current_user.id
    @languages = Language.all
  end

  def create
    @snippet = Snippet.new(params[:snippet])
    if @snippet.save
      flash[:success]= "Snippet Posted."
      redirect_to @snippet
    else
      @languages = Language.all
      render :new
    end
  end

  def edit
    @snippet = Snippet.find_by_slug(params[:id])
    @languages = Language.all
  end

  def update
    if @snippet.update_attributes(params[:snippet])
      flash[:success] = "Snippet Updated."
      redirect_to @snippet
    else
      @languages = Language.all
      render :edit
    end
  end

  def destroy
    @snippet.destroy
    redirect_to root_url
  end

  private

    def correct_user
      @snippet = current_user.snippets.find_by_slug(params[:id])
      redirect_to root_url if @snippet.nil?
    end
end