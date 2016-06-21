
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

function saveCanvas() {
  console.log("attempting to save");
  return project.exportJSON();
}

// Defines what to do with the cursor based on radio button values
function getCursorMode() {
  cursorMode = {
    brush: $('#brushRadio').is(':checked'),
    select: $('#selectRadio').is(':checked'),
  };
}

function deselectAll() {
  _.each(project.selectedItems, function(l){
    l.selected = false;
  });
}

function drawPoints(strokeWidth, strokeColor, strokePoints) {
      var newPath = new Path();

      if(strokeColor === 111) {
        var strCol = "#000";
      } else if(strokeColor === 222) {
        var strCol = "#fff";
      } else {
        var strCol = new HsbColor(strokeColor, 1,1);
      }

      newPath.strokeColor = strCol;
      newPath.strokeWidth = strokeWidth;
      newPath.strokeCap = 'round';

      for(var i=0, len=strokePoints.length; i<len; i++){
        var _s = strokePoints[i].split('|');
        newPath.add(new Point(parseInt(_s[0]), parseInt(_s[1])));
      }

      newPath.closed = false;
      group.addChild(newPath);
      paper.view.draw();
  }



// GLOBAL VARIABLES
function initializePaper() {
  console.log("paperScript.js loaded");
  paper.setup('myCanvas');
  paper.install(window);
  getCursorMode();
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


    function switchCursor() {
        getCursorMode();
        // Deselect items when changing from select mode
        if (!cursorMode.select) {
          _.each(project.selectedItems, function (s) {
            s.selected = false;
          });
        }
    }
    $(".cursorRadio").click(switchCursor);


    // Removes the last line drawn from the canvas, and removes it from the lines array.
    function undo(){
        _.last(lines).remove();
        lines.pop();
    }
    $("#undoButton").click(undo);


    // Grabs the canvas and turns it into a PNG
    function exportCanvas() {
        canvas = document.getElementById("myCanvas");
        var imgUrl = canvas.toDataURL("image/png");
        var $img = $("<img>");
        $img.attr("src", imgUrl);
        $("#imageGallery").append($img);
    }
    $("#exportButton").click(exportCanvas);


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

                  if (selected !== null) {
                        if (!shiftDown) {
                          if(selected.item.selected !== true) {
                            deselectAll();
                          }
                        }
                  }

                  if (!shiftDown && project.selectedItems.length === 0) {
                    selected.item.selected = true;
                  }

              }
    		}

    		tool.onMouseDrag = function(event) {

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
                }
              }
    		}

        tool.onMouseUp = function(event) {
          mouseUpPos = event.point;

            if (cursorMode.brush === true) {
                lines.push(path);
            }
            if (cursorMode.select === true) {
              if (selected !== null) {
                if (mouseUpPos.x === mouseDownPos.x && mouseUpPos.y === mouseDownPos.y){
                  if (shiftDown) {
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
                }
              } else {  // if selected == null
                if(!shiftDown) {
                deselectAll();
                }
              }
          }
        }  // onMouseUp


} // closes Initialize Paper
