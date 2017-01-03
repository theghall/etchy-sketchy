// etchy-sketchy.js
//
// This file does the bulk of the work to display and interact with the grid
//
// 2017=01=03 GH  Created grid
//
$(document).ready(function() {
  initGrid();
});

var initGrid = function() {

  // This is where the grid will be inserted
  var $gc = $("#grid-container");

  var rowId = ""; // For the id to be added to the first DIV in each row
  var divElem=""; // Used to build the DIV element

  // Create 16 x 16 grid
  for (var i = 1; i <=16; i++) {

      rowId = "R" + i;

      for (var j = 1; j <=16; j++) {

        // Put an id in first div of each row for debugging
        if (j === 1) {
          divElem = '<div class="grid-row" ' + 'id="' + rowId + '">' + '</div>';
        }
        else {
          divElem =  '<div class="grid-row"></div>';
        }

        $gc.append(divElem);
      }
  }
}
