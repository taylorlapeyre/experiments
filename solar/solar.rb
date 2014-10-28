# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'entities/star'

module Solar
  def Solar.generate_random_star
    radius = rand(0.5..2)
    luminosity = rand(0.5..2)
    Star.new(radius: radius, luminosity: luminosity)
  end
end

puts Solar.generate_random_star
