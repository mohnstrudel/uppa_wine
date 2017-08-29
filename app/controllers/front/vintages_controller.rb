class Front::VintagesController < FrontController
  def index
    @wines = Vintage.all
  end
end
