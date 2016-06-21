Rails.application.routes.draw do
  get '/designs/new' => 'designs#new'

  get '/designs/:id' => 'designs#app'

  root 'sessions#new'

  get '/login' => 'sessions#new', :as => 'login'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy', :as => 'logout'
  get '/logout' => 'sessions#destroy'

  resources :orders
  resources :messages
  resources :elements
  resources :designs
  resources :users

end
