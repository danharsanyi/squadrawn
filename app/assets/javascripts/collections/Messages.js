var app = app || {};

app.Messages = Backbone.Model.extend({
  url: '/messages',

  model: app.Message,

  initialize: function(){
    console.log('initialized messages collection');

    this.on('add', function (message) {
      console.log('you added ', message);
    });
  }

});
