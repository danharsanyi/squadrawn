var app = app || {};

app.CheckOutPaymentView = Backbone.View.extend({
    el: '#paymentInfo',

    render: function () {
        var paymentInfoTemplate = $('#paymentInfoTemplate').html();
        this.$el.html(paymentInfoTemplate);

        this.$el.find('.navigateToDesign').on('click', function(e) {
            e.preventDefault();
            app.router.navigate('', {trigger: true});
        });

        // app.util.key --------------------------------------------------------
        // this has the publishable key from rails
        // we save it in the application.html.erb :
        // // <script>
        // //         var app = app || {};
        // //         app.util = {};
        // //         app.util.key = "<%= Rails.configuration.stripe[:publishable_key] %>";
        // // </script>
        // ---------------------------------------------------------------------

        var stripeButtonTemplate = '<script src="https://checkout.stripe.com/checkout.js" class="stripe-button" data-image="https://static1.squarespace.com/static/55b6c859e4b0b357b582b8cf/55ddbc78e4b0f0c3127efcb6/55f16b85e4b00a34e7f47fc9/1442294591831/?format=1000w" data-key="' + app.util.key + '" data-description="Buy Squadrawn Swag" data-amount="1999"></script>';

        this.$el.find('form').append(stripeButtonTemplate);
    },

});
