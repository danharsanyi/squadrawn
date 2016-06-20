var app = app || {};

app.Messages = Backbone.Collection.extend({
  url: '/messages',

  model: app.Message,

  initialize: function(){
    console.log('initialized messages collection');

    this.on('add', function (message) {
      var messageView = new app.MessageView({
        model: message
      });
      messageView.render();
    });
  }

});
