class Setting < ApplicationRecord
  has_many :opening_hours, dependent: :destroy

  accepts_nested_attributes_for :opening_hours, :allow_destroy => true

  validates :url, presence: true
end
