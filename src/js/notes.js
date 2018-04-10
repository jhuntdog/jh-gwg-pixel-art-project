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

  console.log('jquery doc ready');

  // variables

  var gridHeight;
  var gridWidth;

  var formData = {
    gridHeight: 10,
    gridWidth: 10
  };

  // var gridSubmit = $('#gridSubmit');
  var table;


  var colorPicked = $('#colorPicker');

  console.log('initial color is: ' + colorPicked);



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
  function clearCell(cell) {
    $(cell).css('background-color', colorPicked);
  }

  /**
   * makeGrid
   *
   * @description makes a grid based on height & width inputs
   */
  function makeGrid() {

    console.log('makeGrid function called');
    console.log('From data is: ' + formData);

    gridTable = $('<table></table>').attr({ id: 'gridTable'});
    var gridRows = formData.gridHeight;
    var gridCols = formData.gridWidth;

    var tr = [];

    for (var i = 0; i < gridRows; i++) {
      var row = $('<tr></tr>').attr({class: 'grid-row'}).appendTo(gridTable);
      for (var j = 0; j < gridCols; j++) {
        $('<td class="grid-cell"></td>').appendTo(row);
      }
    }

    gridTable.appendTo('#gridContainer');

  }

  /**
   * deleteGrid
   *
   * @description Clears the grid
   */
  function deleteGrid() {
    $('#gridTable').remove();
  }

  /**
   *
   * @description form submission
   */
  $('#sizePicker').submit(function( event) {

    // test to make sure jquery can get the submit button
    //alert( "Handler for .submit() called." );
    event.preventDefault();

    formData = {
      'gridHeight': $('#gridHeight').val(),
      'gridWidth': $('#gridWidth').val()
    };

    console.log(formData);

    makeGrid();

  });

  /**
   * @description Deletes grid on click
   */

  $('#gridDelete').click(function() {
    deleteGrid();
  });

  $('#resetColors').click(function() {
    console.log('clicked resetColors');
    $('.grid-cell').removeAttr("style");
  });

  /**
   * Color Cells
   */

  $('#gridContainer').on('mousedown', '.grid-cell', function() {
    console.log('clicked grid-cell');
    colorCell(this);
  });

  // having problems with clicking the generated grid-cells
  // i can mousedown #gridContainer fine
  // thank you stackoverflow
  // need to bind to parent and use the on mousedown

  // $('#gridContainer').mousedown(function() {
  //   console.log('clicked gridcontainer');
  // });

  // $('.grid-cell').mousedown(function() {
  //   console.log('clicked grid-cell');
  //   colorCell($this);
  // });

  // $('.grid-cell').mousedown(function(){
  //   console.log('clicked a cell');
  //   colorCell();
  // });



  // this did not work
  // $('.cell').on('click', function(event) {
  //   console.log('clicked a cell');
  //   colorCell(cell);
  // });


});
