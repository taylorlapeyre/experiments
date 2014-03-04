require 'spec_helper'

describe User do
  before(:each) do
    @user = User.new username: 'username',
                     email: 'email@example.com',
                     password: 'my_password',
                     password_confirmation: 'my_password'
  end

  it 'is valid with valid attributes' do
    expect(@user).to be_valid
  end

  it 'should have a unique username' do
    User.create username: @user.username,
                email: 'unique@email.com',
                password: 'my_password',
                password_confirmation: 'my_password'
    expect(@user).to_not be_valid
  end

  it 'should have a unique email address' do
    User.create username: 'uniqueusername',
                email: @user.email,
                password: 'my_password',
                password_confirmation: 'my_password'
    expect(@user).to_not be_valid
  end

  it 'should have a valid email address' do
    @user.email = "not an email"
    expect(@user).to_not be_valid
  end
end
