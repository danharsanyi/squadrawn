var app = app || {};

app.CheckOutPaymentView = Backbone.View.extend({
    el: '#paymentInfo',

    render: function () {
        var paymentInfoTemplate = $('#paymentInfoTemplate').html();
        this.$el.html(paymentInfoTemplate);

        this.$el.find('')

        // app.util.key --------------------------------------------------------
        // this has the publishable key from rails
        // we save it in the application.html.erb :
        // // <script>
        // //         var app = app || {};
        // //         app.util = {};
        // //         app.util.key = "<%= Rails.configuration.stripe[:publishable_key] %>";
        // // </script>
        // ---------------------------------------------------------------------

        var stripeButtonTemplate = '<script src="https://checkout.stripe.com/checkout.js" class="stripe-button" data-key="' + app.util.key + '" data-description="Launch Survey" data-amount="<%= @amount %>"></script>';
        this.$el.find('form').append(stripeButtonTemplate);
    }
});
