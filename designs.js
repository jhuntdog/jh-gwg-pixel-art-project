// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//
// function makeGrid() {
//
// // Your code goes here!
//
// }



$(document).ready(function(){

  var version = '0.1.2';

  // Select color input
  var colorPicked = $('#colorPicker');

  // size input selection
  var formData = {
    gridHeight: 10,
    gridWidth: 10
  };

  var gridTable;

  /**
   * @description add bg color to cell
   * @param cell
   */
  function colorCell(cell) {
    var color = colorPicked.val();
    $(cell).css('background-color', color);
  }

  /**
   * @description clears a cell color
   * @param cell
   */
  // TODO: add method to clear color of individual cell, like an eraser
  function clearCell(cell) {
    $(cell).css('background-color', "");
  }

  /**
   *
   * @description makes a grid based on height & width inputs
   */
  function makeGrid() {

    //console.log('makeGrid function called');

    gridTable = $('<table></table>').attr({ id: 'gridTable'});
    var gridRows = formData.gridHeight;
    var gridCols = formData.gridWidth;

    for (var i = 0; i < gridRows; i++) {
      var row = $('<tr></tr>').attr({class: 'grid-row'}).appendTo(gridTable);
      for (var j = 0; j < gridCols; j++) {
        $('<td class="grid-cell"></td>').appendTo(row);
      }
    }

    gridTable.appendTo('#gridContainer');

  }

  /**
   *
   * @description Clears the grid
   */
  function deleteGrid() {
    $('#gridContainer').children().remove();
    gridTable = undefined;
  }

  /**
   *
   * @description form submission
   */
  $('#sizePicker').submit(function( event) {

    event.preventDefault();

    while(gridTable) {
      deleteGrid();
    }

    formData = {
      'gridHeight': $('#gridHeight').val(),
      'gridWidth': $('#gridWidth').val()
    };

    // console.log(formData);

    makeGrid();

  });

  /**
   * @description Deletes grid on click
   */

  $('#gridDelete').click(function() {
    deleteGrid();
  });

  $('#resetColors').click(function() {
    // console.log('clicked resetColors');
    $('.grid-cell').removeAttr("style");
  });

  /**
   * Color Cell on Click
   * @description Color cell background on click
   */
  $('#gridContainer').on('mousedown', '.grid-cell', function() {
    // console.log('clicked grid-cell');
    colorCell(this);
  });

  /**
   * Color Cell on Hover
   * @description Color cell background on click
   */
  $('#gridContainer').on('mouseover', '.grid-cell', function(e) {
    if (e.buttons === 1) {
      colorCell(this);
    }
  });



});
