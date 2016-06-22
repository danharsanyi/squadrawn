var app = app || {};

app.ElementsMenuView = Backbone.View.extend({
    el: "#elementsMenu",
    render: function() {
        // console.log('elements menu view rendered');
        var elementsMenuTemplate = $('#elementsMenuTemplate').html();
        this.$el.html( elementsMenuTemplate );
    }
});
