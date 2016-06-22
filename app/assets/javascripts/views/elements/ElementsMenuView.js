var app = app || {};



app.ElementsMenuView = Backbone.View.extend({
    el: "#elementsMenu",
    render: function() {
        // console.log('elements menu view rendered');
        var elementsMenuTemplate = $('#elementsMenuTemplate').html();
        this.$el.html( elementsMenuTemplate );

        var getUniqueElements = function (elements, filter) {
            return _.uniq(elements, function(element) { return element[filter]; });
        }

        var getElementTypes = function (elements) {
            return elements.map(function(element) {
                return element.element_type;
            })
        }

        var currentElements = app.elements.toJSON();

        var uniqueElements = getUniqueElements(currentElements, 'element_type');
        var getElementTypes = getElementTypes(uniqueElements);

        getElementTypes.unshift('all');

        var menuData = getElementTypes;

        menuData.forEach(function (type) {
            var currentMenuItem = new app.ElementsMenuItemView();
            currentMenuItem.render(type);
        })

        $(document).on('click', '#elementsMenu ul li', function(e){
            var clickedType = $(e.currentTarget).attr('data-type')
            console.log(clickedType);
            if (clickedType) {
                app.component.elementsListView.render(clickedType);
            }
        });

    }
});
