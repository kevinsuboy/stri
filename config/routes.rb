Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resources :user, only: [:index] do
      resources :route, only: [:index]
      resources :activity, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :route, only: [:index,:show,:create,:edit,:destroy]
    resources :activity, only: [:index,:show,:create,:edit,:destroy]
  end

  root "static_pages#root"
end
