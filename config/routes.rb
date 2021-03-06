Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :holdings, only: [:create, :destroy]
    resources :companies, only: [:index, :show]
    resources :articles, only: [:index, :show, :create]
    resources :quotes, only: [:show]
    get "/nav/articlesearch", to: "articles#search"
    get "/nav/randomstocks", to: "companies#random"
  end
end
