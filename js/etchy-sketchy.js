// etchy-sketchy.js
//
// This file does the bulk of the work to display and interact with the grid
//
// 2017=01=03 GH  Created grid, mouseenter function
//
var defaultSize = 16; // Grid is even so this is both number of rows and cols
var currentSize = defaultSize;
var squareClass = "grid-square"

$(document).ready(function() {
  initGrid();

  // "draws" black line as mouse is dragged
  $('div.grid-square').mouseenter(function() {
      $(this).css({backgroundColor: "#000000"});
  });
});


var initGrid = function() {

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
          divElem = '<div class="' + squareClass + '" id="' + rowId + '" ></div>';
        }
        else {
          divElem =  '<div class="' + squareClass + '"></div>';
        }

        $gc.append(divElem);
      }
  }
}

function clearGrid() {

}
