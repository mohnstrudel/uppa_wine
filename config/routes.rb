Rails.application.routes.draw do
  root to: 'bottles#home'
  resources :bottles
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
