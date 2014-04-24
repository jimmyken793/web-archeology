require 'data_mapper'

DataMapper.setup(:default, "sqlite3://#{Dir.pwd}/song.sqlite")

class Midi
  include DataMapper::Resource
  belongs_to :song, 'Song'
  storage_names[:default] = "Midi"
  property :id, Serial, :field => 'SSN'
  property :song_id, Integer, :field => 'SongSSN'
  property :path, String, :field => 'Path'
end

class Song
  include DataMapper::Resource
  belongs_to :singer, 'Singer'
  has n, :midis
  storage_names[:default] = "Song"
  property :id, Serial, :field => 'SSN'
  property :name, String, :field => 'Name'
  property :language, String, :field => 'Language'
  property :singer_id, Integer, :field => 'SingerSSN'
end

class Singer
  include DataMapper::Resource
  has n, :songs
  storage_names[:default] = "Singer"
  property :id, Serial, :field => 'SSN'
  property :name, String, :field => 'Name'
  property :type, String, :field => 'Type'
  property :gender, String, :field => 'Gender'
end
