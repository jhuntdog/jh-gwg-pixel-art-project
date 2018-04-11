/**
 * Instructions from source materials
 *
 * Select color input
 * Select size input
 * When size is submitted by the user, call makeGrid()
 * function makeGrid() {
 * // Your code goes here!
 * }
 *
 */


$(document).ready(function(){

  const version = '0.1.2';

  const gridContainer = $('#gridContainer');
  const gridTable = '';

  // Select color input
  const colorPicked = $('#colorPicker');

  // Select size input
  // TODO: default form values here instead of in html file
  let formData = {
    gridHeight: 10,
    gridWidth: 10
  };


  /**
   * @description add bg color to cell
   * @param cell
   */
  function colorCell(cell) {
    let color = colorPicked.val();
    $(cell).css('background-color', color);
  }

  /**
   * @description removes bg color of individual cell
   * @param cell
   */
  // TODO: add method to clear color of individual cell, like an eraser
  function clearCell(cell) {
    $(cell).css('background-color', "");
  }

  /**
   * @description creates a table grid based on the width and height submitted
   * @param gridWidth - width of the grid, number of columns
   * @param gridHeight - height of grid, number of rows
   */
  function makeGrid(gridWidth, gridHeight) {

    //console.log('makeGrid function called');

    let gridTable = $('<table></table>').attr({ id: 'gridTable'});
    // let gridRows = formData.gridHeight;
    // let gridCols = formData.gridWidth;

    let gridRows = gridHeight;
    let gridCols = gridWidth;

    for (let i = 0; i < gridRows; i++) {
      let row = $('<tr></tr>').attr({class: 'grid-row'}).appendTo(gridTable);
      for (let j = 0; j < gridCols; j++) {
        $('<td class="grid-cell"></td>').appendTo(row);
      }
    }

    gridTable.appendTo(gridContainer);

  }

  /**
   *
   * @description Clears the grid
   */
  function deleteGrid() {
    gridContainer.children().remove();
    //let gridTable = 'blank';
  }

  /**
   * @description form submission handler clears and creates the table grid
   */
  $('#sizePicker').submit(function( event) {

    event.preventDefault();

    // prevent duplicate grids being created
    // example of while loop
    while (gridContainer.children().length > 0) {
      deleteGrid();
    }

    // get form input of grid height and width
    let formData = {
      'gridHeight': $('#gridHeight').val(),
      'gridWidth': $('#gridWidth').val()
    };
    //console.log(formData);

    // pass width and height to makeGrid function
    makeGrid(formData.gridWidth, formData.gridHeight);

  });

  /**
   * @description Deletes grid on click
   */

  $('#gridDelete').click(function() {
    deleteGrid();
  });

  /**
   * @description Resets the grid cell colors
   */
  $('#resetColors').click(function() {
    // console.log('clicked resetColors');
    $('.grid-cell').removeAttr("style");
  });

  /**
   * @description Color cell background on click
   */
  gridContainer.on('mousedown', '.grid-cell', function() {
    // console.log('clicked grid-cell');
    colorCell(this);
  });

  /**
   * @description Color cell background on hover
   */
  gridContainer.on('mouseover', '.grid-cell', function(e) {
    if (e.buttons === 1) {
      colorCell(this);
    }
  });



});
