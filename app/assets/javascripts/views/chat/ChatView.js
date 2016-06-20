var app = app || {};

app.ChatView = Backbone.View.extend({
  el: "#chatContainer",

  render: function(){
    var chatView = $("#chatViewTemplate").html();
    this.$el.html(chatView);
  }
});
