var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#main",

  render: function(){
    var appViewTemplate = $("#appViewTemplate").html();
    this.$el.html(appViewTemplate);

    var elementView = new app.ElementView();
    elementView.render();

    var designView = new app.DesignView();
    designView.render();

    var chatView = new app.ChatView();
    chatView.render();
  }

});
