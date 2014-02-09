class Snippet < ActiveRecord::Base
  attr_accessible :content, :description, :source_link, :title, :language_id, :user_id

  belongs_to :user
  belongs_to :language

  before_save :create_slug

  validates :title, presence: true,
                    length: { maximum: 300 }
  validates :language_id, presence: true
  validates :user_id, presence: true

  def to_param
    slug
  end

  private

    def create_slug
      self.slug = SecureRandom.urlsafe_base64(15)
    end
end
