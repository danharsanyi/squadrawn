// _.templateSettings = {
//     interpolate: /\{\{\=(.+?)\}\}/g,
//     evaluate: /\{\{(.+?)\}\}/g
// };

app.elements = new app.Elements();
app.designs = new app.Designs();
app.messages = new app.Messages();

$(document).ready(function(){

  app.elements.fetch().done(function() {
      app.designs.fetch().done(function(){
        app.messages.fetch().done(function(){
          app.router = new app.AppRouter();
          Backbone.history.start();
        });
      });
  });
});
