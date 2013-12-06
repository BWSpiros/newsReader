class EntriesController < ApplicationController
  def index
    feed = Feed.find(params[:feed_id])
    feed.reload if feed.updated_at < (Time.now-120)
    render :json => feed.entries
  end
end
