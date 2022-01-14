class AirlineSerializer
  include JSONAPI::Serializer
  attributes :name, :slug, :avg_rate
  has_many :reviews
end
