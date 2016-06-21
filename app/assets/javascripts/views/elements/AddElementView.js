var app = app || {};

app.AddElementsView = Backbone.View.extend({
    el: "#elementsAdd",
    render: function() {
        this.$el.html('<div id="addElementButton"> Add Custom Element</div>');
    }
});
