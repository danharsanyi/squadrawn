var app = app || {};

app.ChatView = Backbone.View.extend({
  el: "#chatContainer",

  render: function(){
    var chatView = $("#chatViewTemplate").html();
    this.$el.html(chatView);

    var chatInputView = new app.ChatInputView();
    chatInputView.render();

    var chatMessagesView = new app.ChatMessagesView();
    chatMessagesView.render();
  }
});
