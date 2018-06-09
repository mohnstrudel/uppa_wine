class Admin::RequestsController < AdminController
  include CrudConcern
  
  before_action :find_request, only: [:show, :destroy, :edit]

  def index
    @requests = Request.all.order(created_at: :desc)
  end

  def show
  end

  def edit
  end


  def destroy
    destroy_helper(@request, "admin_requests_path")
  end

  private

  def find_request
    @request = Request.find(params[:id])
  end

  def request_params
    params.require(:request).permit(Request.attribute_names(&:to_sym))
  end

end
