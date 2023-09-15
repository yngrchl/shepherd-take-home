Rails.application.routes.draw do
  root 'components#index'
  namespace :api do
    resources :app_types, only: [:show]
  end
  get '/*path', to: 'components#index'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
end
