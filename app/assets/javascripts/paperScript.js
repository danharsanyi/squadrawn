
var mouseMovement;
var shiftDown = false;
var canvas;
var pixels = [];
var lines = [];
var lastline;
var cursorMode = {};
var mouseDownPos;
var mouseUpPos;
var mouseDelta;
var isDraggingElement = false;
var currentDraggingElement = {};

function saveCanvas() {
  // console.log("attempting to save");
  var canvasIsThere = $('#myCanvas')[0];
  if (canvasIsThere) return project.exportJSON();
}

// Defines what to do with the cursor based on radio button values
function getCursorMode() {
  cursorMode = {
    brush: $('#brushRadio').is(':checked'),
    select: $('#selectRadio').is(':checked'),
  };
}

function switchCursor() {
    getCursorMode();
    // Deselect items when changing from select mode
    if (!cursorMode.select) {
      _.each(project.selectedItems, function (s) {
        s.selected = false;
      });
    }
}

function deselectAll() {
  _.each(project.selectedItems, function(l){
    l.selected = false;
  });
}

function saveDesign() {
  canvas = document.getElementById("myCanvas");
  var imageUrl = canvas.toDataURL("image/png");
  var designID = app.designs.get(app.currentDesignID);
  var designJSON = saveCanvas();
  designID.set("canvas_data", designJSON);
  designID.set("url", imageUrl);
  designID.save(null, {
    success: function (model, response) {
        alert("Design Saved");
    }});
}

function loadCanvas() {
  project.importJSON(app.designs.get(app.currentDesignID).get("canvas_data"));
  paper.view.draw();
}

// Removes the last line drawn from the canvas, and removes it from the lines array.
function undo(){
    _.last(lines).remove();
    lines.pop();
}

function deleteProject(){
  app.designs.get(app.currentDesignID).destroy();
  window.location = "/designs";

}

function exportCanvas() {
    canvas = document.getElementById("myCanvas");
    var imgUrl = canvas.toDataURL("image/png");
    console.log("export attempted");
    download(imgUrl);
      // var $img = $("<img>");
      // $img.attr("src", imgUrl);
      // $("#imageGallery").append($img);

}

function downloadCanvas(link) {
  link.href = document.getElementById("myCanvas").toDataURL("image/png");
  link.download = "dope-photo.png";
}

function insertImage(url){
    var raster = new Raster(url);
    var leftPosition = view.center._x = 0;
    raster.position = leftPosition;
    return raster;
}


function deleteSelectedElements() {
  var deleteJSON = ["Delete", app.currentUser];
  var itemsToDelete = [];
  _.each(project.selectedItems, function(p) {
    itemsToDelete.push(p.id);
    p.remove();
    paper.view.draw();
  });
  deleteJSON.push(itemsToDelete);
  sendCanvasData(deleteJSON);
}

function insertDrawing (data) {
    var importedData = project.importJSON(data);
    paper.view.draw();
    return importedData;
}

function insertElement (data) {

    console.log('inserting drawing')

    var content = JSON.parse(data.element_data);

    if (data.element_type === 'image') {
        return insertImage(content.value.url);
    }

    if (data.element_type === 'shape') {
        return insertDrawing(content.value);
    }

}




// INITIALIZE CANVAS
function initializePaper() {
  // console.log("paperScript initialized");
  paper.setup('myCanvas');
  paper.install(window);

  loadCanvas();
  getCursorMode();
  $("#undoButton").click(undo);
  $(".cursorRadio").click(switchCursor);
  $("#saveButton").click(saveDesign);
  $("#downloadLink").click(function(){
    downloadCanvas(this);
  });
  $("#deleteButton").click(deleteProject);

  $("#myCanvas").click(function(){
    $("input").blur();
  });
  //
  // var raster = new Raster("/facebook_like.png");


  // var group = new Group();


    // Checks if shift is being held down
    $(window).keydown(event, function(e) {
      if (event.keyCode == 16) {
      shiftDown = true;
      }
    });
    $(window).keyup(event, function(e) {
      if (event.keyCode == 16) {
        shiftDown = false;
      }
    });

    $(window).keydown(event, function(){
      if(event.keyCode == 8) {
        if (!$("input").is(":focus") && project.selectedItems.length !== 0) {
              event.preventDefault();
              deleteSelectedElements();
          }
      }
    });





    // Grabs the canvas and turns it into a PNG




		// Create a simple drawing tool:
		var tool = new Tool();
		var path;

		// Define a mousedown and mousedrag handler


    		tool.onMouseDown = function(event) {
          mouseDownPos = event.point;
            if (cursorMode.brush === true) {
              			path = new Path();
              			path.strokeColor = '#' + $("#colorPicker").val();
                    path.strokeWidth = $("#brushSize").val();
                    path.strokeCap = 'round';
                    // console.log("mouse down " + event.point);
                    // console.log(path);
              			path.add(event.point);
              }



            if (cursorMode.select === true) {
                  selected = project.hitTest(event.point);
                  console.log(selected);
                  console.log(project.selectedItems);

                  if (selected !== null) {
                        if (!shiftDown) {
                          if(selected.item.selected !== true) {
                            deselectAll();
                          }
                        }
                  }

                  if (!shiftDown && project.selectedItems.length === 0 && selected) {
                    selected.item.selected = true;
                  }

              }
    		}

    		tool.onMouseDrag = function(event) {
          // console.log("donk");
          // console.log(project.selectedItems);
            mouseMovement = event.delta;

            if (cursorMode.brush === true) {
                    pixels.push(path);
              			path.add(event.point);
            }

            if (cursorMode.select === true) {
              if (selected !== null) {
                  _.each(project.selectedItems, function(i) {
                      i.position = {x: i.position._x + event.delta.x, y: i.position._y + event.delta.y};
                  });
                } else {
                  // console.log("firing select drag");

                  var selectBox = new Path.Rectangle(new Point(50, 50), new Point(150, 100));
                  selectBox.add(event.point);
                }


              }
    		}

        tool.onMouseUp = function(event) {
          mouseUpPos = event.point;

            if (cursorMode.brush === true) {
                lines.push(path);
                lastline = path;
                lastlineJSON = lastline.exportJSON();
                lastlineJSON = [lastlineJSON, app.currentUser];
                sendCanvasData(lastlineJSON);
            }
            if (cursorMode.select === true) {
              if (selected !== null) {
                if (mouseUpPos.x === mouseDownPos.x && mouseUpPos.y === mouseDownPos.y){
                  if (shiftDown) { // if shift is being held down, and the mouse ahs not moved
                    if (selected.item.selected === true) {
                      selected.item.selected = false;
                    } else {
                      selected.item.selected = true;
                    }
                  }

                  if (!shiftDown && project.selectedItems.length > 0) {
                    deselectAll();
                    selected.item.selected = true;
                  }

                  if (!shiftDown && project.selectedItems.length === 0) {
                    if (selected.item.selected === true) {
                      selected.item.selected = false;
                    } else {
                      selected.item.selected = true;
                    }
                  }
                } else {// (if mouse has moved)
                  selectedItems = project.selectedItems;
                  var movementJSON = ["Movement", app.currentUser];
                  var movementData = [];
                    _.each(selectedItems, function(i){
                      var itemData = [i.id, i.position._x, i.position._y];
                      movementData.push(itemData);
                    });
                  movementJSON.push(movementData);
                  sendCanvasData(movementJSON);
                }
              } else {  // if selected == null
                if(!shiftDown) {
                deselectAll();
                }
         }
          }
        }  // onMouseUp

        tool.onMouseMove = function(e) {
            if (isDraggingElement) {
                var currentElement = project.getItem({ id: currentDraggingElement._id});
                currentElement.position.x = currentElement.position._x + e.delta.x;
                currentElement.position.y = currentElement.position._y + e.delta.y;
            }
        }


} // closes Initialize Paper
