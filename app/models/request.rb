class Request < ApplicationRecord

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :email, presence: true,
                format: { with: VALID_EMAIL_REGEX }

  validates :name, :phone, presence: true
end
