require 'sinatra'
require './db'

get '/' do
	erb :index, :layout => :main_layout
end

get '/1' do
	erb :index1, :layout => :main_layout
end

get '/a' do
	@songs = Song.all(:fields => [:language], :unique => true, :order => [:language.asc])
	erb :a, :layout => :main_layout
end

get '/b' do
	@singers = Singer.all(:songs=>{:language => "台語"})
	erb :b, :layout => :main_layout
end

get '/c' do
	@songs = Song.all(:singer=>{:name=>'伍佰'},:language => "台語")
	erb :c, :layout => :main_layout
end
get '/d' do
	@songs = Song.all(:singer=>{:name=>'伍佰'},:language => "國語")
	erb :d, :layout => :main_layout
end

get '/e' do
	@singers = Singer.all(:songs=>{:language => "台語"}, :gender=>"女")
	erb :e, :layout => :main_layout
end

get '/f' do
	@songs = Song.all(:singer=>{:name=>'張宇'},:language => "國語")
	erb :f, :layout => :main_layout
end

get '/g' do
	@midis = Midi.all(:song=>{:singer=>{:name=>'張宇'},:language => "國語"})
	erb :g, :layout => :main_layout
end

get '/h' do
	@songs = Song.all(:fields => [:language], :unique => true)
	erb :h, :layout => :main_layout
end

get '/i' do
	@songs = Song.all(:fields => [:name], :unique => true, :conditions=>['(select count(*) from Song as NSong where NSong.Name = Song.Name AND NSong.SSN != Song.SSN) > 0'])
	erb :i, :layout => :main_layout
end

get '/j' do
	@songs = Song.all(:conditions=>['(select count(*) from Midi where SongSSN = Song.SSN) = 0'])
	erb :j, :layout => :main_layout
end

get '/k' do
	@songs = Song.all(:name.like=>"%愛%") + Song.all(:name.like=>"%恨%")
	erb :k, :layout => :main_layout
end

get '/2' do
	@singers = Singer.all(:conditions=>['(select count(distinct Language) from Song where SingerSSN = Singer.SSN) >=2'])
	@songs = Song.all(:conditions=>['(select count(*) from Midi where SongSSN = Song.SSN) >= 2'])
	@midis = Midi.all(:song=>{:singer=>{:name=>'伍佰'}})
	@count = Singer.all(:gender=>"男").count
	@midis1 = Midi.all(:song=>{:singer=>{:gender=>"女"}})
	erb :index2, :layout => :main_layout
end


