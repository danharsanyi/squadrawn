json.array!(@designs) do |design|
  json.extract! design, :id, :canvas_data, :url
  json.url design.url
end
