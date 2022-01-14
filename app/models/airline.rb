class Airline < ApplicationRecord
    has_many :reviews
    before_create :slugify

    def slugify
        self.slug = name.parameterize
    end

    def avg_rate
        return 0 unless reviews.count.positive?
        reviews.average(:rate).round(2).to_f
    end
end
