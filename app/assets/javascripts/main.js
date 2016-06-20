app.elements = new app.Elements();
app.designs = new app.Designs();

$(document).ready(function(){

  app.elements.fetch().done(function() {
      app.designs.fetch().done(function(){
        app.router = new app.AppRouter();
        Backbone.history.start();
      });
  })

});
