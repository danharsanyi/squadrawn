
var mouseMovement;
var shiftDown = false;
var canvas;
var pixels = [];
var lines = [];
var lastline;
var cursorMode;
var mouseDownPos;
var mouseUpPos;

var mouseDelta;

// GLOBAL VARIABLES
function initializePaper() {


// var hitOptions = {
// 	segments: true,
// 	stroke: true,
// 	fill: true,
// 	tolerance: 5
// };




  console.log("paperScript.js loaded");

  paper.setup('myCanvas');
  // var group = new Group();

    $(window).keydown(event, function(e) {
      if (event.keyCode == 16) {
      shiftDown = true;
      console.log("shiftdown is" + shiftDown);
      }


    });
    $(window).keyup(event, function(e) {
      if (event.keyCode == 16) {
        shiftDown = false;
      }
    });

    function getCursorMode() {
      cursorMode = {
        brush: $('#brushRadio').is(':checked'),
        select: $('#selectRadio').is(':checked'),
      };
    }
    getCursorMode();
    $(".cursorRadio").click(getCursorMode);

    function undo(){
        _.last(lines).remove();
        lines.pop();
    }
    $("#undoButton").click(undo);

    function exportCanvas() {
        canvas = document.getElementById("myCanvas");
        var imgUrl = canvas.toDataURL("image/png");
        var $img = $("<img>");
        $img.attr("src", imgUrl);
        $("#imageGallery").append($img);
    }
    $("#exportButton").click(exportCanvas);


    paper.install(window);





    paper.setup('myCanvas');

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
                    console.log("mouse down " + event.point);
                    console.log(path);


              			path.add(event.point);
              }



            if (cursorMode.select === true) {
                  selected = project.hitTest(event.point);
                  if (!shiftDown) {
                    if(selected.item.selected !== true) {
                      _.each(lines, function(l){
                        l.selected = false;
                      });
                  }
                }




              }
                  console.log(selected);


    		}

    		tool.onMouseDrag = function(event) {

            console.log(event.delta);
            mouseMovement = event.delta;

            if (cursorMode.brush === true) {
                    pixels.push(path);
              			path.add(event.point);
            }

            if (cursorMode.select === true) {

              // debugger
              newPos = {x: 500, y: 500};
              // newPos = {x: selected.item.position_x - event.delta.x, y: selected.item.position_y - event.delta.y};
              console.log(newPos);

            if (selected) {
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
                if (mouseUpPos.x === mouseDownPos.x && mouseUpPos.y === mouseDownPos.y){
                  if (shiftDown) {
                    if (selected.item.selected === true) {
                      selected.item.selected = false;
                    } else {
                      selected.item.selected = true;
                    }
                  }

                  if (!shiftDown && project.selectedItems.length > 0) {
                    _.each(lines, function(l){
                      l.selected = false;
                    });
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
          }

        }


}
