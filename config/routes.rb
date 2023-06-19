Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    get 'buyers/show'
    get 'agents/index'
    get '/properties', to:'properties#index'
    get '/properties/available', to:'properties#available'
    get '/properties/show', to:'properties#show'
    get '/properties/cities', to:'properties#cities'
    get '/properties/:city', to:'properties#city'

    get "/agents", to: "agents#index"
    get "/agents/:id", to: "agents#show_buyers"
    get "/buyers/:id", to: "buyers#show"

    get "city_cost", to: "properties#city_cost"

  end
end
