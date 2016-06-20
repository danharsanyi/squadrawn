app.designs = new app.Designs();
app.messages = new app.Messages();

$(document).ready(function(){
  app.designs.fetch().done(function(){
    app.router = new app.AppRouter();
    Backbone.history.start();
  });

});
