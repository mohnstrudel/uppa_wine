class Front::VintagesController < FrontController
  def index
    @vintages = Vintage.all
  end
end
