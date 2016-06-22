var app = app || {};
app.Orders = Backbone.Collection.extend({
  url: "/orders",

  model: app.Order,

  initialize: function(){
    // console.log('initialized elements collection');

    this.on('add', function (order) {
      // console.log('you added ', element);
    });
  }
});
