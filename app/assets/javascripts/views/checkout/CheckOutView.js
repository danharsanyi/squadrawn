var app = app || {};

app.CheckOutView = Backbone.View.extend({
    el: '#main',

    saveDesign: function() {
      var designID = app.designs.get(app.currentDesignID);
      var designJSON = saveCanvas();
      designID.set("canvas_data", designJSON);
      designID.save();
    },

    render: function ( data ) {
        this.saveDesign();
        var checkOutViewTemplate = $('#checkOutViewTemplate').html();
        this.$el.html(checkOutViewTemplate);


    }
})
