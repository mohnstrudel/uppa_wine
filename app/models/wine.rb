class Wine < ApplicationRecord
  mount_uploader :logo, LogoUploader
  belongs_to :vintage, optional: true

  extend FriendlyId
  friendly_id :year, use: :slugged

  def next(vintage)
    vintage.wines("id > ?", id).first
  end

  def previous(vintage)
    vintage.wines.where("id < ?", id).last
  end
end
