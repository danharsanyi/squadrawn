var app = app ||{};

app.ChatInputView = Backbone.View.extend({
  events: {
    'click button': 'submitMessage'
  },

  el: "#chatInput",

  render: function(){
      var chatInputFormTemplate = $("#chatInputFormTemplate").html();
      this.$el.html(chatInputFormTemplate);
  },

  submitMessage: function(){
    var userMessageInput = $("#chatInputForm").val();
    console.log(userMessageInput);
  }


});
