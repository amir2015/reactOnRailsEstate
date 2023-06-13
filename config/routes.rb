Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    get '/properties', to:'properties#index'
    get '/properties/available', to:'properties#available'
    get '/properties/show', to:'properties#show'
    get '/properties/cities', to:'properties#cities'
    get '/properties/:city', to:'properties#city'


  end
end
