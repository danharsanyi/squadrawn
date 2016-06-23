var app = app || {};

app.CheckOutView = Backbone.View.extend({
    el: '#main',

  

    render: function ( data ) {
        this.saveDesign();
        var checkOutViewTemplate = $('#checkOutViewTemplate').html();
        this.$el.html(checkOutViewTemplate);
    }
})
