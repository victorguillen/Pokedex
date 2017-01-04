class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
  end

  def create
  end

  def show
    @pokemon = Pokemon.find(params[:id])
  end

  def delete
  end

  def update
  end
end
