var app = app || {};

app.Element = Backbone.Model.extend({
  urlRoot: "/elements",

  defaults: {
      element_type: "",
      element_data: "",
      user_id: "",
  },
  
  initialize: function () {
    console.log('initialized element model');
  }

});
