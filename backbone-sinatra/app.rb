require 'sinatra'
require 'JSON'
require './models'

get '/' do
	@snippets = Snippet.all.to_json
	@languages = Language.all.to_json
	erb :index
end

# Snippet API
get '/snippets' do
	Snippet.all.to_json
end

get '/snippets/:id' do
	snippet = Snippet.get(params[:id])
	if snippet
		snippet.to_json
	else
		status 404
	end
end

post '/snippets' do
	snippet = Snippet.new(params)
	if snippet.save
		status 201
		snippet.to_json
	else
		status 500
	end
end

put '/snippets/:id' do
	params_json = JSON.parse(request.body.read)
	snippet = Snippet.get(params[:id])
	if snippet
		snippet.update(params_json)
		if snippet.save
			status 202
			snippet.to_json
		else
			status 500
		end
	else
		status 404
	end
end

delete '/snippets/:id' do
	snippet = Snippet.get(params[:id])
	if snippet
		snippet.delete
		status 202
	else
		status 404
	end
end

# Lanuage API
get '/languages' do
	Language.all.to_json
end

get '/languages/:id' do
	language = Language.get(params[:id])
	if language
		language.to_json
	else
		status 404
	end
end

post '/languages' do
	language = Language.new(params)
	if language.save
		status 201
		language.to_json
	else
		status 500
	end
end

put '/languages/:id' do
	params_json = JSON.parse(request.body.read)
	language = Language.get(params[:id])
	if language
		language.update(params_json)
		if language.save
			status 202
			language.to_json
		else
			status 500
		end
	else
		status 404
	end
end

delete '/languages/:id' do
	language = Language.get(params[:id])
	if language
		snippet.delete
		status 202
	else
		status 404
	end
end

