var app = app || {};

app.Design = Backbone.Model.extend({
  urlRoot: "/designs",

  defaults: {
      canvas_data: {},
      url: "",
  },

  initialize: function () {
    // console.log('initialized design model');
  }
});
