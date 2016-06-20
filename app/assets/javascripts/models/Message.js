var app = app || {};

app.Message = Backbone.Model.extend({
  urlRoot: '/designs',

  defaults: {
    content: "blank message"
  },

  initialize: function () {
    console.log('initialized message model');
  }
});
