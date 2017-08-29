class Wine < ApplicationRecord
  mount_uploader :logo, LogoUploader
  belongs_to :vintage, optional: true


end
