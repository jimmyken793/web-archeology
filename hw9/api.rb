require 'sinatra'
require './db'
require 'json'

get '/langs/?' do
	["國語","台語","粵語","英語"].to_json
end

get '/langs/:lang/?' do
	params[:lang]
end

get '/langs/:lang/singers/?' do
	Singer.all(:songs=>{:language => params[:lang]}).to_json
end

get '/langs/:lang/singers/:id/?' do
	Singer.all(:id=>params[:id]).first.to_json
end

get '/langs/:lang/singers/:id/songs/?' do
	Song.all(:singer=>Singer.all(:id=>params[:id]).first,:language => params[:lang]).to_json
end

get '/singers/?' do
	content_type :json
 	Singer.all.to_json
end

get '/singers/:id/?' do
	content_type :json
 	Singer.all(:id=>params[:id]).first.to_json
end

get '/singers/:id/songs/?' do
	content_type :json
 	Singer.all(:id=>params[:id]).first.songs.to_json
end

get '/songs/?' do
	content_type :json
 	Song.all.to_json
end

get '/songs/:id/?' do
	content_type :json
 	Song.all(:id=>params[:id]).first.to_json
end

get '/songs/:id/midis/?' do
	content_type :json
 	Song.all(:id=>params[:id]).first.midis.to_json
end

get '/midis/?' do
	content_type :json
 	Midi.all.to_json
end

get '/midis/:id/?' do
	content_type :json
 	Midi.all(:id=>params[:id]).first.to_json
end