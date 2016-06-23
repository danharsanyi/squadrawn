var app = app || {};

app.AppRouter = Backbone.Router.extend({

  routes: {
    '': 'designPage',
    'checkout/:id' : 'checkOutPage'
  },
  designPage: function () {
    var appView = new app.AppView();
    appView.render();
  },
  checkOutPage: function (id) {
    var checkOutView = new app.CheckOutView();
    checkOutView.render(id);
  }
});
