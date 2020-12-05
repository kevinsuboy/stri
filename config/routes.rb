Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resources :user, only: [:index] do
      resources :route, only: [:index]
      resources :activity, only: [:index]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :route, only: [:index,:update,:create,:edit,:destroy]
    resources :route, only: [:show] do
      resources :activity, only: [:index]
    end
    resources :activity, only: [:index,:show,:update,:create,:edit,:destroy]
  end

  root "static_pages#root"
end
