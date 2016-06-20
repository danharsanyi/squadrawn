var app = app || {};

app.ElementsView = Backbone.View.extend({
  el: "#elementsContainer",
  render: function(){
    var elementViewTemplate = $("#elementsViewTemplate").html();
    this.$el.html(elementViewTemplate);
    var elementsMenuView = new app.ElementsMenuView();
  }
});
