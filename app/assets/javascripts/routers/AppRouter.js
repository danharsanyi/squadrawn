var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'designPage'
  },
  
  designPage: function(){
    var appView = new app.AppView();
    appView.render();
  }

});
