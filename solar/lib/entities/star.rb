require 'entities/planet'

module Solar
  class Star
    attr_reader :radius, :mass, :luminosity, :planets

    def initialize(radius: nil, luminosity: nil)
      if radius.nil? || luminosity.nil?
        fail TypeError, "Must supply a radius and luminosity."
      end

      @radius     = radius # in Solar Radii
      @mass       = calculate_mass
      @luminosity = calculate_luminosity

      generate_planets!
    end

    def calculate_mass # in Solar Mass
      # TODO
    end

    def calculate_luminosity # in Watts
      # TODO
    end

    def generate_planets!
      @planets = Array.new(@radius * 1.3, Solar::Planet.new(star: self))
    end

    def to_s
      str = %Q(
        Mass:       #{@mass} Solar Mass
        Luminosity: #{@luminosity} Watts
        Radius:     #{@radius} Solar Radii
        Number of planets: #{@planets.count}
        Planets:
      )
      @planets.each { |planet| str += planet.to_s }
      str
    end
  end
end
