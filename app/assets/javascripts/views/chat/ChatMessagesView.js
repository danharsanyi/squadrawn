var app = app || {};

app.ChatMessagesView = Backbone.View.extend({
  el: "#chatMessages",

  render: function(){
    var chatMessagesTemplate = $("#chatMessagesTemplate").html();
    this.$el.html(chatMessagesTemplate);
  }
});
