// Save colour selected by user input
const selectedColor = $('#colorPicker');

// Get the height and width input
const tableHeight = $('#inputHeight');
const tableWidth = $('#inputWidth');


// Listen for a submit action
$('#sizePicker').submit(function(event){
    event.preventDefault();

    //Reset any previous table if present
    $('#pixelCanvas').children().remove();

    // Call the makeGrid() function to draw the new table
    makeGrid();
});

function makeGrid() {

    // Get table display area, column and row inputs values
    let pixelCanvas = $('#pixelCanvas');
    let getRow = parseInt( tableHeight.val() );
    let getCol = parseInt( tableWidth.val() );

    // Loop through user's input values and generate rows and cols as entered. 
    for(let y = 0; y < getRow; y++){
        let createRow = $('<tr></tr>');
     
        for(let x = 0; x < getCol; x++){
            let createCol = $('<td></td');
            createRow.append(createCol);
        }   

        pixelCanvas.append(createRow);
    }

    // Add an on click event listener to #pixelCanvas
    // Use event delegation to target each cell of the table
    // to change background-color to the picked color on click.
    pixelCanvas.on('click', 'td', function(evt) {
        $(evt.target).css('background-color', selectedColor.val());
    });

}

// Set body background-color
$('body').css('background-color', '#6fa8d2');
