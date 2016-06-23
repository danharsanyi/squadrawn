// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone
//= require jscolor.js
//= require paper-full.js
//= require moments
//= require scripts
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require faye
//= require_tree .

function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

var sendCanvasData;

var app = app || {};

app.currentMembers = [];

window.client = new Faye.Client('/faye');


$(function(){
    console.log('lol')
    window.client.on('open', function(data) {
            console.log('something opened')
    })

    window.client.subscribe('/room/join', function(data) {
        console.log('JOINING!');
        console.log(data)

        // ADD THIS NAME TO THE RELEVANT CHAT

        // if the recieved design ID is the same as the current design ID on the client
        // then add it to a global variable of current users
        // keep it unique

        var currentString = 'd' + data.design + 'u' + data.user.id;

        var isUniqueAndRelevant = data.design === app.currentDesignID && app.currentMembers.indexOf(currentString) === -1;

        if (isUniqueAndRelevant) {
            app.currentMembers.push(currentString)
            console.log('new person joined the room');
            window.client.publish('/room/added', {
                designId: app.currentDesignID,
                value: app.currentMembers,
            });
            app.component.membersView.render();
        } else {
            console.log('the new client was either duplicate or not in design room');
        }
    })

    window.client.subscribe('/room/added', function(data) {

        // if this isn't the same room then dont do anything
        if(data.designId !== app.currentDesignID) return;

        // compare recieved array with current array
        var currentMembers = app.currentMembers;
        var receivedMembers = data.value;

        var both = currentMembers.concat(receivedMembers);
        var unique = arrayUnique(both);

        if (unique.length >= currentMembers.length) {

            if ( unique.length > currentMembers.length ) {
                // adopt it and publish
                app.currentMembers = unique;
                window.client.publish('/room/added', {
                    designId: app.currentDesignID,
                    value: app.currentMembers,
                });
                console.log('uniques found: ', app.currentMembers)
                app.component.membersView.render();
            }

            if ( unique.length === currentMembers.length ) {
                console.log('no uniques found')
                return;
            }

        }

    })

      var currentDesign = parseInt(app.currentDesignID);
      var url = '/designs/'+currentDesign;

      window.client.subscribe(url, function(data){

        if (data.user.name === app.currentUser.name) {
          return;
        } else {

          var currentMessage = new app.Message();

          currentMessage.set({
            content: data.content,
            user: {
              name: data.user.name
            }
          });

          var messageView = new app.MessageView({
            model: currentMessage,
          });

          messageView.render();
          updateScroll();
        }
    });

    // current design
    var canvasChannel = '/canvas/' + currentDesign;

    window.client.subscribe(canvasChannel, function(data) {
        // GO RE-RENDER OVER data
        // WITH data which is - prject.exportJSON
        console.log("json received");

      if (data[1].id !== app.currentUser.id) {

        if (data[0] == "Movement"){
          selectedItems = data[2];
          _.each(selectedItems, function(i){
            item = project.getItem({name: i[0]});
            item.position = {x: i[1], y: i[2]};
            paper.view.draw();
          });
          return;
        }

        if (data[0] == "Delete") {
          var itemsToDelete = [];
          _.each(data[2], function(d){
            var e = project.getItem({name: d});
            e.remove();
            paper.view.draw();
          });
          return;
        }

        if (JSON.parse(data[0])[0] == "Path") {
          project.layers[0].importJSON(data[0]);
          paper.view.draw();
          return;
        }

        if (JSON.parse(data[0])[0] == "Raster") {
          project.layers[0].importJSON(data[0]);
          paper.view.draw();
          return;
        }




      }

    });
});
