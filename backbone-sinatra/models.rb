require 'rubygems'
require 'data_mapper' 

DataMapper::Logger.new($stdout, :debug)
DataMapper.setup(:default, 'sqlite:test.db')

class Snippet
	include DataMapper::Resource
	belongs_to :language

	property :id, Serial
	property :title, String
	property :content, Text
	property :language_id, Integer
	property :user_id, Integer
	property :description, String
	property :score, Integer
end

class Language
	include DataMapper::Resource
	has n, :snippets

	property :id, Serial
	property :name, String
	property :description, String
end

DataMapper.finalize
DataMapper.auto_upgrade!