var app = app || {};

app.DesignView = Backbone.View.extend({
  el: "#designContainer",
  render: function(){
    var designView = $("#designViewTemplate").html();
    this.$el.html(designView);
    var toolsView = new app.ToolsView();
    toolsView.render();
    initializePaper();


    this.$el.find('#buyButton').on('click', function() {
        app.router.navigate('checkout/' + app.currentDesignID, {trigger: true});
    })


    var allowMouseUpEvent = false;

    $(document).on('mousedown', '#myCanvas', function(e) {
        console.log('mousedown on canvas', e.currentTarget.id);
        var canvasID = e.currentTarget.id;
        if(canvasID === 'myCanvas') {
            console.log('mousedown');
            allowMouseUpEvent = true;
        }
    })

    $(document).on('mouseup', function(e) {
        if (allowMouseUpEvent) {
            console.log('mouse upped');

            // GET ME SOME CANVAS DATA
            var projectData = project.exportJSON();
            sendCanvasData(projectData);
            allowMouseUpEvent = false;
        }
    })

    var sendCanvasData = function (data) {

        var client = new Faye.Client('http://localhost:9292/faye');
        var channel = '/canvas/'+app.currentDesignID;
        client.publish(channel, data);

    }

    // $(document).on('mouseup', function(e) {
    //     console.log('mouseup on canvas', e.currentTarget)
    // })

    // if (app.currentDesignID) {
    //
    //   var imageUrl = app.designs.get(app.currentDesignID).toJSON().url;
    //   var $image = $("<img>");
    //
    //   $image.attr('src', imageUrl );
    //
    //   this.$el.html($image);
    //   this.$el.prepend('<button> test checkout </button>');
    //   var testCheckOutButton = this.$el.find('button');
    //
    //
    // }
  }
});
