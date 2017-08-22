class Wine < ApplicationRecord
  mount_uploader :logo, LogoUploader
end
