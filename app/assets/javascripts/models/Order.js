var app = app || {};

app.Order = Backbone.Model.extend({
  urlRoot: "/orders",
  defaults: {
    user_id: "",
    design_id: "",
    product: "",
    size: "",
    total: "",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address_1: "",
    address_2: "",
    country: "",
    city: "",
    postcode: "",
  },
  initialize: function () {
      
  }
});
