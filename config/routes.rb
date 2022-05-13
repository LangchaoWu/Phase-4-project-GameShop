Rails.application.routes.draw do
  
  resources :carts
  resources :images
  resources :features
  resources :reviews
  resources :games
  resources :users

  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
  get '/authorized_user', to: 'sessions#get_current_user'
  # get '/authorized_user', to: 'users#show'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
