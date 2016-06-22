var app = app || {};

app.ElementsMenuItemView = Backbone.View.extend({
    tagName: "li",
    render: function(type) {
        console.log('elements menu view rendered');

        var elementsMenuItemTemplate = $('#elementsMenuItemTemplate').html();
        var _elementsMenuItemTemplate = _.template(elementsMenuItemTemplate);
        var elementsMenuItemTemplateWithData = _elementsMenuItemTemplate({
            type: type
        });

        this.$el.html( elementsMenuItemTemplateWithData );
        this.$el.appendTo('#elementsMenu ul');
    }
});
