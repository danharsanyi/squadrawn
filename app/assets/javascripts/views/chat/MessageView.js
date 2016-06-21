var app = app || {};

app.MessageView = Backbone.View.extend({
  tagName: 'div',

  render: function(){
    var content = this.model.get("content");
    var posterID = this.model.get("user_id");
    var posterName = this.model.get("user").name;
    var postTime = this.model.get("created_at");
    postTime = moment(postTime).fromNow();

    if (posterName === undefined) {
        posterName = app.currentUser.name;
    }

    var $p = $("<p>");
    $p.html(posterName + ": ");
    $p.addClass("chatNames");
    this.$el.append($p);

    var $p2 = $("<p>");
    $p2.html(content);
    $p2.addClass("chatContent");
    this.$el.append($p2);

    var $p3 = $("<p>");
    $p3.html(postTime);
    $p3.addClass("chatTime");
    this.$el.prepend($p3);

    if (app.currentUser.id === posterID) {
      this.$el.addClass("myMessage");
    } else {
      this.$el.addClass("otherMessage");
    }

    this.$el.appendTo("#chatMessages");
    this.$el.addClass("messageDiv");
  }

});
