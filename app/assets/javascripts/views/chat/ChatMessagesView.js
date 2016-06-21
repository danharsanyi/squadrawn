var app = app || {};

app.ChatMessagesView = Backbone.View.extend({
  el: "#chatMessages",

  render: function(){
    var chatMessagesTemplate = $("#chatMessagesTemplate").html();
    var currentDesign = parseInt(app.currentDesignID);
    var existingMessages = app.messages.where({design_id: currentDesign});
    _.each(existingMessages, function(message){
      var messageView = new app.MessageView({
          model: message
        });
        messageView.render();
        });
    updateScroll();
  },
});
