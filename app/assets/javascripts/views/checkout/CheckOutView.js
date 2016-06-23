var app = app || {};

app.CheckOutView = Backbone.View.extend({
    el: '#main',

    saveDesign: function() {
      var designID = app.designs.get(app.currentDesignID);
      var designJSON = saveCanvas();
      designID.set("canvas_data", designJSON);
      designID.save();
    },

    render: function ( id ) {
        this.saveDesign();
        var checkOutViewTemplate = $('#checkOutViewTemplate').html();
        this.$el.html(checkOutViewTemplate);

        var checkOutDesignView = new app.CheckOutDesignView();
        checkOutDesignView.render( id );

        var checkOutPaymentView = new app.CheckOutPaymentView();
        checkOutPaymentView.render( );

    }
});
