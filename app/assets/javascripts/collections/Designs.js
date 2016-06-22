var app = app || {};

app.Designs = Backbone.Collection.extend({
  url: "/designs",

  model: app.Design,

  initialize: function(){
    // console.log('initialized designs collection');

    this.on('add', function (design) {
      // console.log('you added ', design);
    });
  }
});
