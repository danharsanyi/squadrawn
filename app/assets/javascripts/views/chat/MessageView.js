var app = app || {};

app.MessageView = Backbone.View.extend({
  tagName: 'p',

  render: function(){
    var content = this.model.get("content");
    this.$el.html( content );
    this.$el.appendTo("#chatMessages");
  }

});
