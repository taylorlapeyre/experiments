require 'entities/moon'

module Solar
  class Planet
    attr_reader :mass, :distance_from_star, :composition

    def initialize(star: nil)
      if star.nil?
        fail TypeError, "Planets must be generated from a star."
      end

      @star               = star
      @mass               = calculate_mass
      @composition        = calculate_composition
      @radius             = calculate_radius
      @distance_from_star = calculate_distance_from_star

      generate_moons!
    end

    def calculate_mass # in Solar Mass
      # TODO
      # GRAVITATIONAL_CONSTANT = 6.67259e-11
      #
      # GRAVITATIONAL_CONSTANT * ((@mass * @star.mass) / @distance_from_star ** 2)
    end

    def calculate_distance_from_star # in AU
      # TODO
    end

    def calculate_radius # in Solar Radii
      # TODO
    end

    def calculate_composition
      # TODO
    end

    def generate_moons!
      amount_of_moons = @radius.to_f * 1.2
      @moons = Array.new(amount_of_moons, Solar::Moon.new(planet: self))
    end

    def to_s
      str = %Q(
          Mass:   #{@mass} Solar Mass
          Radius: #{@radius} Solar Radii
          Distance From Star: #{@distance_from_star} AU
          Composition: #{@composition}
          Number of moons: #{@moons.count}
          Moons:
      )
      @moons.each { |moon| str += moon.to_s }
      str
    end
  end
end
