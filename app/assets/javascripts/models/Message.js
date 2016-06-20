var app = app || {};

app.Message = Backbone.Model.extend({
  urlRoot: "/messages",

  defaults: {
    content: "blank message",
    user: ""
  },

  initialize: function () {
    console.log('initialized message model');
  }
});
