class Front::StaticPagesController < FrontController
    
  before_action :set_page_loading_time

  def about
  end

  def home
  end

  def contacts
    @clean_sales_phone = @setting.clean_phone(@setting.sales_phone)
    @clean_visit_phone = @setting.clean_phone(@setting.visit_phone)

    
  end

  def technology
  end

  def visit
  end

  def club
    @request = Request.new
  end

  def terra
  end

  def age_confirmation
    session[:already_18] = true
    redirect_to root_path
  end

  private

  def set_page_loading_time
    # Delete old timers
    session.delete(:timer_1)
    session.delete(:timer_2)
    # Setup new
    session[:timer_1] = Time.now
  end
end
