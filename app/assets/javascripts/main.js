app.designs = new app.Designs();

$(document).ready(function(){
  app.designs.fetch().done(function(){
    app.router = new app.AppRouter();
    Backbone.history.start();
  });

});
