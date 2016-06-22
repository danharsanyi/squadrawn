var app = app || {};

app.Order = Backbone.Model.extend({
  urlRoot: "/orders",
  defaults: {
    user_id: "blank message",
    design_id: "",
  },
  initialize: function () {

  }
});
