var app = app || {};

app.ToolsView = Backbone.View.extend({
  el: "#toolsContainer",
  render: function(){
    // console.log("attempted toolsview render");

    var toolsView = $("#toolsViewTemplate").html();

    this.$el.html(toolsView);
    initializeColorPicker();
      // var imageUrl = app.designs.get(app.currentDesignID).toJSON().url;
      // var $image = $("<img>");
      //
      // $image.attr('src', imageUrl );
      //
      // this.$el.html($image);
      // this.$el.prepend('<button> test checkout </button>');
      // var testCheckOutButton = this.$el.find('button');

  }
});
