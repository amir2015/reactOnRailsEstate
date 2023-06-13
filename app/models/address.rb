class Address < ApplicationRecord
  belongs_to :property
  def self.cities
    select(" DISTINCT city ")

  end
end
