var app = app || {};

app.ElementsListView = Backbone.View.extend({
    el: "#elementsList",
    render: function() {
        console.log('element list view initialised');
        var elementListTemplate = $("#elementListTemplate").html();
        this.$el.html(elementListTemplate);

        var currentElements = app.elements.toJSON();

        currentElements.forEach(function (element) {
            var currentElementItem = new app.ElementView();
            currentElementItem.render(element);
        });

        debugger;
    }
});
