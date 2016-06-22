var app = app || {};

app.CheckOutPaymentView = Backbone.View.extend({
    el: '#paymentInfo',

    render: function () {
        var paymentInfoTemplate = $('#paymentInfoTemplate').html();
        this.$el.html(paymentInfoTemplate);
    }
});
