Rails.application.routes.draw do
  resources :orders
  resources :messages
  resources :elements
  resources :designs
  resources :users

  root 'designs#index'
  get '/login' => 'sessions#new', :as => 'login'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy', :as => 'logout'
  get '/logout' => 'sessions#destroy'

end
