// etchy-sketchy.js
//
// This file does the bulk of the work to display and interact with the grid
//
// 2017-01-03 GH  Created grid, mouseenter function
// 2017-01-04 GH  Added Clear Grid functionality
//
var defaultSize = 16; // Grid is even so this is both number of rows and cols
var currentSize = defaultSize;
var squareClass = "grid-square";
var containerSize = 0;

$(document).ready(function() {

  // Get pixel size of the div container for the grid
  var cssVal = $('#grid-container').css("height");
  containerSize = cssVal.substr(0,cssVal.indexOf("px"));

  initGrid(defaultSize);
  initEvents();

});

// initGrid appends DIV elements with the class squareClass which will be the
// sqaures in our grid.  The grid will be gridSize x gridSize
var initGrid = function(gridSize) {

  currentSize = gridSize;

  // Adjust height and width of DIV elements based on gridSize
  var squarePixelSize = Math.floor(containerSize/gridSize);
  // Determine if floor would leave too much space and add .5 to keep float working
  if (squarePixelSize + 1 === Math.round(containerSize/gridSize)) { squarePixelSize = squarePixelSize + 0.5;}
  var styleString = ' Style="height:' + squarePixelSize + "px; width:" + squarePixelSize + 'px;"';

  // This is where the grid will be inserted
  var $gc = $("#grid-container");

  var rowId = "";   // For the id to be added to the first DIV in each row
  var divElem = ""; // Used to build the DIV element

  // Create grid currentSize x currentSize
  for (var i = 1; i <= currentSize; i++) {

      rowId = "R" + i;

      for (var j = 1; j <= currentSize; j++) {

        // Put an id in first div of each row for debugging
        if (j === 1) {
          divElem = '<div class="' + squareClass + '" id="' + rowId + '\" ' + styleString + '></div>';
        }
        else {
          divElem =  '<div class="' + squareClass + '" ' + styleString + '></div>';
        }

        $gc.append(divElem);
      }
  }
}

function initEvents() {
  // "draws" black line as mouse is dragged
  var targetElem = "div."+ squareClass;
  $(targetElem).mouseenter(function() {
      $(this).css({backgroundColor: "#000000"});
  });
}

function clearGrid() {

  var targetElem = "." + squareClass;
  $('div').remove(targetElem);

  var gridSize = defaultSize;

  //  Ask user for new gridSize
  do {
    var askAgain = false;

    gridSize = prompt("What size grid would you like?",defaultSize);

    if (isNaN(gridSize)) {
      alert("Please enter a number.")
      askAgain = true;
    }

  } while (askAgain);

  initGrid(gridSize);
  initEvents();
}
