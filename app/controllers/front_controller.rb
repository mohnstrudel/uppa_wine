class FrontController < ApplicationController
  layout 'front'

  before_action :find_setting

  private

  def find_setting
    @setting = Setting.first
  end
end
