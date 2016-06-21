json.array!(@messages) do |message|
  json.extract! message, :id, :content, :design_id, :user_id, :created_at
  json.url message_url(message, format: :json)
  json.user message.user
end
