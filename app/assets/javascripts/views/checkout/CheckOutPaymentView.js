var app = app || {};

app.CheckOutPaymentView = Backbone.View.extend({
    el: '#paymentInfo',

    render: function () {
        var paymentInfoTemplate = $('#paymentInfoTemplate').html();
        this.$el.html(paymentInfoTemplate);

        var stripeButtonTemplate = '<script src="https://checkout.stripe.com/checkout.js" class="stripe-button" data-key="' + app.util.key + '" data-description="Launch Survey" data-amount="<%= @amount %>"></script>';
        this.$el.find('form').append(stripeButtonTemplate);
    }
});
