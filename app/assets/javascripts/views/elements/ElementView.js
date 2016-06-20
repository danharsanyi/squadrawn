var app = app || {};

app.ElementView = Backbone.View.extend({
  el: "#elementsContainer",

  render: function(){
    var elementViewTemplate = $("#elementsViewTemplate").html();
    this.$el.html(elementViewTemplate);
  }
});
