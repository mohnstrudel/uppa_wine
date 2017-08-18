class Front::WinesController < FrontController
  def index
    @wines = Wine.all
  end

  def show
    @wine = Wine.find(params[:id])
  end

  def home
  end
end
