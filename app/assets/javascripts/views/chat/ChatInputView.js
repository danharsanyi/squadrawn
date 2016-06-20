var app = app ||{};

app.ChatInputView = Backbone.View.extend({
  events: {
    'click button': 'submitMessage',
    'keydown textarea': 'checkForEnter'
  },

  checkForEnter: function( event ){
    app.ENTER_KEY = 13;
    if (event.which === app.ENTER_KEY) {
      event.preventDefault();
      this.submitMessage();
    }
},

  el: "#chatInput",

  render: function(){
      var chatInputFormTemplate = $("#chatInputFormTemplate").html();
      this.$el.html(chatInputFormTemplate);
  },

  submitMessage: function(){
      console.log("A message should be created");
      var message = new app.Message();
      var userMessageInput = this.$el.find("textarea").val();
      message.set({
        content: userMessageInput
      });
      message.save();
      app.messages.add(message);
      this.$el.find("textarea").val('').focus();
      console.log(message);
  }
});
