class AdminController < ApplicationController
  layout 'admin'

  before_action :get_breadcrumbs
  before_action :authenticate_admin!, :verify_is_superadmin

  private

  def get_breadcrumbs
    splitted_url = request.original_fullpath.split("/")
    # Remove first object
    splitted_url.shift
    result = splitted_url.map { |element| element.humanize.capitalize }
    session[:breadcrumbs] = result
    # debug
  end

    def verify_is_superadmin
    (current_admin.nil?) ? redirect_to(root_path) : (redirect_to(root_path) unless current_admin.superadmin?)
  end
end
