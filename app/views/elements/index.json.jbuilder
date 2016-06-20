json.array!(@elements) do |element|
  json.extract! element, :id, :element_type, :element_data
  json.url element_url(element, format: :json)
end
