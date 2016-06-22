var app = app || {};

app.CheckOutDesignView = Backbone.View.extend({
    el: '#designToBuy',

    render: function (id) {
        var designToBuyTemplate = $('#designToBuyTemplate').html();
        var stripeButtonTemplate = '<script src="https://checkout.stripe.com/checkout.js" class="stripe-button" data-key="' + app.util.key + '" data-description="Launch Survey" data-amount="<%= @amount %>"></script>';
        

        var imageURL = app.designs.get(id).attributes.url;

        var $imageOfDesign = $("<img>");
        $imageOfDesign.attr("src", imageURL);
        $imageOfDesign.addClass("buyImage");

        var $h3 = $("<h3>");
        $h3.html("Purchase Your Design");

        this.$el.append($h3);
        this.$el.append($imageOfDesign);
        this.$el.append(stripeButtonTemplate);
    }
});
