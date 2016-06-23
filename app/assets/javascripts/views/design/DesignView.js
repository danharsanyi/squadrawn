var app = app || {};

app.DesignView = Backbone.View.extend({
  el: "#designContainer",

  render: function(){
    var designView = $("#designViewTemplate").html();
    this.$el.html(designView);
    var toolsView = new app.ToolsView();
    toolsView.render();
    initializePaper();

    var payment = function(){
      var url = '/charges/new';
      window.location = url;

      // $.ajax({
      //     src:"https://checkout.stripe.com/checkout.js",
      //     class:"stripe-button",
      //     data-key:"<%= Rails.configuration.stripe[:publishable_key] %>",
      //     data-description:"A month's subscription",
      //     data-amount:"500",
      //     data-locale:"auto"
      //   });
    };

    // this.$el.find('#buyButton').on('click', payment);

    this.$el.find('#buyButton').on('click', function() {
        app.router.navigate('checkout/' + app.currentDesignID, {trigger: true});
    });


    // var allowMouseUpEvent = false;
    //
    // // $(document).on('mousedown', '#myCanvas', function(e) {
    // //     var canvasID = e.currentTarget.id;
    // //     if(canvasID === 'myCanvas') {
    // //         allowMouseUpEvent = true;
    // //     }
    // // })
    // //
    // // $(document).on('mouseup', function(e) {
    // //     if (allowMouseUpEvent) {
    // //         // GET ME SOME CANVAS DATA
    // //         var projectData = project.exportJSON();
    // //         sendCanvasData(projectData);
    // //         allowMouseUpEvent = false;
    // //     }
    // // })

    sendCanvasData = function (data) {
        var channel = '/canvas/'+app.currentDesignID;
        window.client.publish(channel, data);
        console.log('sending data');
    };
  }

});




// var payment = function(){
//   $.ajax({
//     src:"https://checkout.stripe.com/checkout.js",
//     class:"stripe-button",
//     data-key:"<%= Rails.configuration.stripe[:publishable_key] %>",
//     data-description:"A month's subscription",
//     data-amount:"500",
//     data-locale:"auto"
//   });
