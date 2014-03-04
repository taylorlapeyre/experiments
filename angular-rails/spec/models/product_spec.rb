require 'spec_helper'

describe Product do
  before(:each) { @product = Product.new name: "My product" }

  it 'should be valid with valid attributes' do
    expect(@product).to be_valid
  end

  it 'should have a unique name' do
    prod = @product.dup
    prod.name = @product.name.upcase
    prod.save
    expect(@product).to_not be_valid
  end
end
