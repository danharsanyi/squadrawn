var app = app || {};

app.DesignView = Backbone.View.extend({
  el: "#designContainer",

  render: function(){
    var designView = $("#designViewTemplate").html();
    var imageUrl = app.designs.get(app.currentDesignID).toJSON().url;
    var $image = $("<img>");
    $image.attr('src', imageUrl );
    this.$el.html($image);
  }

});
