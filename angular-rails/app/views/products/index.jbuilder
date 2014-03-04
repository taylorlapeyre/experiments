json.array! @products do |product|
  json.extract! snippet, :name
end
