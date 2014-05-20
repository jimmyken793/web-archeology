require 'sinatra'
require './db'
require './api'

set :public_folder, 'public'

get '/' do
	erb :index, :layout => :main_layout
end
