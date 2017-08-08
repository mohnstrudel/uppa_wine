Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :admin do
    get '/', to: 'dashboard#index'
    resources :wines
    resources :settings
  end

  scope module: :front do
    root 'wines#home'
    resources :wines
  end
end
