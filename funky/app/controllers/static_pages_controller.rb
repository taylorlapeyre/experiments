class StaticPagesController < ApplicationController
  def home
    @snippets = Snippet.all.sort_by { |s| s[:created_at] }.reverse
  end

  def about
  end

  def contribute
  end
end
