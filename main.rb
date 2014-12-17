require 'sinatra'
require 'json-fuzz-generator'

set :environment, :production

get '/' do
  erb :index
end
