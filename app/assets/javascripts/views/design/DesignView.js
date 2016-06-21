var app = app || {};

app.DesignView = Backbone.View.extend({
  el: "#designContainer",
  render: function(){
    var designView = $("#designViewTemplate").html();
    if (app.currentDesignID) {

      var imageUrl = app.designs.get(app.currentDesignID).toJSON().url;
      var $image = $("<img>");

      $image.attr('src', imageUrl );

      this.$el.html($image);
      this.$el.prepend('<button> test checkout </button>');
      var testCheckOutButton = this.$el.find('button');
      
      app.router.navigate('checkout/' + app.currentDesignID, {trigger: true});

    }
  }
});
