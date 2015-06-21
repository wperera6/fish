class PicsController < ApplicationController

  require 'json'

  def index
    #  file = File.read("app/assets/javascripts/gallery_json.js")
    #  gon.pics = JSON.parse(file)
    #  gon.your_hash = @your_hash

    # # redirect_to root_path
  end

  def get_pics
    
    # @photos = File.read(File.open("app/assets/javascripts/gallery_json.js"))
    # @photos.gsub("/n", " ")
    file = File.read("app/assets/javascripts/gallery_json.js")
    gon.pics = JSON.parse(file)

    redirect_to root_path

     
  end
  
  
  
end
