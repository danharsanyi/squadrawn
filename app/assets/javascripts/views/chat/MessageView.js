var app = app || {};

app.MessageView = Backbone.View.extend({
  tagName: 'div',

  render: function(){
    var content = this.model.get("content");
    var posterID = this.model.get("user_id");
    var posterName = this.model.get("user").name;

    if (posterName === undefined) {
        posterName = app.currentUser.name;
    }

    var $span = $("<span>");
    $span.html(posterName + ": ");


    this.$el.append($span);

    var $span2 = $("<span>");
    $span2.html(content);
    this.$el.append($span2);

    if (app.currentUser.id === posterID) {
      this.$el.addClass("myMessage");
    } else {
      this.$el.addClass("otherMessage");
    }

    this.$el.appendTo("#chatMessages");
    this.$el.addClass("messageDiv");
  }

});
