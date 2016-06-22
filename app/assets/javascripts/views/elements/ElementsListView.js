var app = app || {};

app.ElementsListView = Backbone.View.extend({
    el: "#elementsList",

    render: function(filter) {
        console.log('element list view initialised');
        var elementListTemplate = $("#elementListTemplate").html();
        this.$el.html(elementListTemplate);

        var currentElements = app.elements.toJSON();

        var filteredElements = currentElements.filter(function(element) {
            if (filter === 'all') {
                return true;
            } else {
                return element.element_type === filter;
            }
        });

        filteredElements.forEach(function (element) {
            var currentElementItem = new app.ElementView();
            currentElementItem.render(element);
        });
    }
});
