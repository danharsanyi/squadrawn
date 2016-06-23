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

        var currentID, clickedElement;

        $(document).on('mousedown', '#elementsList li', function(e) {

            currentID = $(e.currentTarget).find('.elementItemContainer').attr('data-id');
            clickedElement = app.elements.get(currentID).toJSON();

            // put the thing on the canvas
            // get a reference to it on the canvas

            var addedElement = insertElement(clickedElement);
            currentDraggingElement = addedElement;
            isDraggingElement = true;



        }).on('mousemove', '#myCanvas', function(e) {

            // select the targeted element on the canvas
            // move the elements position
            // ----------------------------------------
            // activate it

        }).on('mouseup', function(e) {

            // console.log('mouse upped on canvas')
            //
            // // de-select image
            // isDraggingElement = false;
            // var currentElement = project.getItem({ id: currentDraggingElement._id});
            // var data = ['Element', currentElement]
            //
            // sendCanvasData(data);
            //
            // console.log(currentElement);
            //


        })

    }
});
