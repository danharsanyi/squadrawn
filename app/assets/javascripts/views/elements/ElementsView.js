var app = app || {};

app.ElementsView = Backbone.View.extend({
  el: "#elementsContainer",
  render: function(){
    var elementViewTemplate = $("#elementsViewTemplate").html();
    this.$el.html(elementViewTemplate);

    app.component.elementsMenuView = new app.ElementsMenuView();
    app.component.elementsMenuView.render();

    app.component.elementsListView = new app.ElementsListView();
    app.component.elementsListView.render('all');

    var addElementsView = new app.AddElementsView();
    addElementsView.render();
  }
});
