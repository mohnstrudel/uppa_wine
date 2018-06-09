Rails.application.routes.draw do

  # devise_for :admins
  devise_for :admins, 
      controllers: {
        sessions: 'front/users/sessions',
        registrations: 'front/users/registrations'
      }, 
      path: '', 
      path_names: { 
        sign_in: 'login', 
        sign_out: 'logout', 
        sign_up: 'register', 
        edit: 'profile' 
      }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :admin do
    get '/', to: 'dashboard#index'
    resources :vintages
    resources :settings
    resources :requests
  end

  scope ":locale", locale: /#{I18n.available_locales.join("|")}/ do
    scope module: :front do
      root 'static_pages#home'
      get '/about', to: 'static_pages#about'
      get '/contacts', to: 'static_pages#contacts'
      get '/technology', to: 'static_pages#technology'
      get '/visit', to: 'static_pages#visit'
      get '/club', to: 'static_pages#club'
      get '/terra', to: 'static_pages#terra'
      get '/age_confirmation', to: 'static_pages#age_confirmation'
      resources :vintages, path: :wines do
        resources :wines, path: :vintages
      end
      resources :requests, only: :create
    end
  end

  match '*path', to: redirect("/#{I18n.default_locale}/%{path}"), via: :get
  match '', to: redirect("/#{I18n.default_locale}/"), via: :get
end
