require 'sinatra'
require 'active_record'
require 'yaml'
require "json"
require "json-fuzz-generator"
require 'logger'

# start setting for server run 
set :environment, :production

# connecting databases
config = YAML.load_file('database.yml')
ActiveRecord::Base.establish_connection(config["prod"])

# log setting
logger = Logger.new(STDOUT)

#db override
class Apps < ActiveRecord::Base
end

# main codes
get '/' do
  erb :index
end

get'/generate_data.json' do
    content_type :json
    if @params[:id] == "12" then
        return Apps.all.to_json
    end
    [ 
      {:id => 1234, :name => "tanaka"},
      {:id => 2344, :name => "misono"}
    ].to_json
end
