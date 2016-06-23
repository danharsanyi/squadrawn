var app = app ||{};

app.ChatInputView = Backbone.View.extend({
  events: {
    'click button': 'submitMessage',
    'keydown input': 'checkForEnter'
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
        var message = new app.Message();
        var userMessageInput = this.$el.find("input").val();
        var currentDesign = parseInt(app.currentDesignID);
        var currentUser = app.currentUser.id;

        // var client = new Faye.Client('http://localhost:9292/faye');
        var url = '/designs/'+currentDesign;

        window.client.publish(url, {
          content: userMessageInput,
          user_id: currentUser,
          design_id: currentDesign,
          user: {
            name: app.currentUser.name
          }
        });

        message.set({
          content: userMessageInput,
          user_id: currentUser,
          design_id: currentDesign,
          user: {
            name: app.currentUser.name
          }
        });
        message.save();
        app.messages.add(message);
        this.$el.find("input").val('').focus();
    }
});












// submitMessage: function(){
//       var message = new app.Message();
//       var userMessageInput = this.$el.find("input").val();
//       var currentDesign = parseInt(app.currentDesignID);
//       var currentUser = app.currentUser.id;
//       message.set({
//         content: userMessageInput,
//         user_id: currentUser,
//         design_id: currentDesign
//       });
//       message.save();
//       app.messages.add(message);
//       this.$el.find("input").val('').focus();
//       console.log(message);
//   }
