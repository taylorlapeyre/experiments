class Language < ActiveRecord::Base
  attr_accessible :description, :name

  has_many :snippets

  validates :name, presence: true

  def to_param
    name
  end
end
