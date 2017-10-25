class Wine < ApplicationRecord
  mount_uploader :logo, LogoUploader
  belongs_to :vintage, optional: true

  extend FriendlyId
  friendly_id :year, use: :slugged

  after_save :set_slug

  # Try building a slug based on the following fields in
  # increasing order of specificity.
  def slug_candidates
    [
      :year,
      [:year, :id]
    ]
  end

  private

  def set_slug
    if self.year.present?
      begin
        slugged_one = self.year
        slugged_two = self.id
        self.slug = "#{slugged_one}-#{slugged_two}"
      rescue NoMethodError => e
        self.slug = nil
      end
    else
      self.slug = self.id
    end
  end
end
