var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#main",

  render: function(){
    var appViewTemplate = $("#appViewTemplate").html();
    this.$el.html(appViewTemplate);

    var elementsView = new app.ElementsView();
    elementsView.render();

    var designView = new app.DesignView();
    designView.render();

    var chatView = new app.ChatView();
    chatView.render();
  }

});
