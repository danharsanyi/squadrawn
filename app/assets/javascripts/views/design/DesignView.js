var app = app || {};

app.DesignView = Backbone.View.extend({
  el: "#designContainer",

  render: function(){

    var designView = $("#designViewTemplate").html();
    this.$el.html(designView);

    var toolsView = new app.ToolsView();
    toolsView.render();

    app.component.membersView = new app.MembersView();
    app.component.membersView.render([]);

    initializePaper();

    var payment = function(){
      var url = '/charges/new';
      window.location = url;
    };

    this.$el.find('#buyButton').on('click', function() {
        app.router.navigate('checkout/' + app.currentDesignID, {trigger: true});
    });

    sendCanvasData = function (data) {
        saveDesign();
        var channel = '/canvas/'+app.currentDesignID;
        window.client.publish(channel, data);
        console.log('sending data');
    };

    window.client.publish('/room/join', {
        user: app.currentUser,
        design: app.currentDesignID
    });


  }

});
