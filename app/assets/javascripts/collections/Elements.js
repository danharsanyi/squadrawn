var app = app || {};

app.Elements = Backbone.Collection.extend({
  url: "/elements",

  model: app.Element,

  initialize: function(){
    // console.log('initialized elements collection');

    this.on('add', function (element) {
      // console.log('you added ', element);
    });
  }
});
