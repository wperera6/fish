class PicsController < ApplicationController

  require 'json'

  def index

  end

  def get_pics
    
    # @photos = File.read(File.open("app/assets/javascripts/gallery_json.js"))
    # @photos.gsub("/n", " ")

    binding.pry
    file = File.read("app/assets/javascripts/gallery_json.js")
    gon.pics = JSON.parse(file)


    redirect_to root_path 
  end
  
  
  
end
