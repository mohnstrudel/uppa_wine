Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :admin do
    get '/', to: 'dashboard#index'
    resources :vintages
    resources :settings
  end

  scope module: :front do
    root 'vintages#home'
    resources :vintages, path: :wines do
      resources :wines, path: :vintages
    end
  end
end
