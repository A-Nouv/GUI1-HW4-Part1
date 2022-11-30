/*
Anderson Nouv
Created: 10/29/22
Edited: 11/26/22
File: multiplicationTable.js (FOR PART 1)
*/ 

// Display error message if min or max values are not compliant
/*
    Known issues: with AND without the parseInt(), some number combinations would not
    work EX) 2 and 10 for the min and max values. 
    With parseInt(), it stops my error messages from appearing.
    Without parseInt(), my error messages appear

    ** ABOVE SOLVED. Solution: I'm dumb and didn't do parseInt in multiply function **
    ** Stops floating point numbers from being multiplied as well. It just uses the integer before the decimal point **

    Bugs?: 
    - Sometimes error message(s) won't go away even if the field(s) are 
    fixed with correct input, but that may be due to me randomly putting in
    wrong inputs very quickly, or in some order when testing. Table should work fine though.
*/

/* Display error messages if user doesn't input min/max values correctly */ 
function errorMessage() {
    var minCol = parseInt(document.getElementById("minColumn").value);
    var minRow = parseInt(document.getElementById("minRow").value);

    // Causes fields to require user input with the below ranges for each field
    $("#form-horizontal").validate({
        rules: {
            
            minColumn: {
                required: true,
                range: [-50, 50]
            },

            maxColumn: {
                required: true,
                range: [minCol, 50]
            },

            minRow: {
                required: true,
                range: [-50, 50]
            },

            maxRow: {
                required: true,
                range: [minRow, 50]
            }
        },

        // Error messages if user input doesn't fit with the ranges of a field
        messages: {
            minColumn: {
                required: "Minimum Column Value Required",
                range: "Minimum value must be greater than or equal to -50 and less than or equal to 50"
            },

            maxColumn: {
                required: "Maximum Column Value Required",
                range: "Maximum value must be greater than or equal to the Minimum Column value and less than or equal to 50"
            },

            minRow: {
                required: "Minimum Row Value Required",
                range: "Minimum value must be greater than or equal to -50 and less than or equal to 50"
            },

            maxRow: {
                required: "Maximum Row Value Required",
                range: "Maximum value must be greater than or equal to the Minimum Row value and less than or equal to 50"
            }
        }
    });

    // Testing to make sure minCol's and minRow's values
    // are correct and used in the range
    console.log("MinCol:");
    console.log(minCol);
    console.log("MinRow:");
    console.log(minRow);
}

// Multiply the minCol to maxCol values with the minRow to maxRow values 
// and create table
function multiply() {
    var minCol = parseInt(document.getElementById("minColumn").value);
    var maxCol = parseInt(document.getElementById("maxColumn").value);
    var minRow = parseInt(document.getElementById("minRow").value);
    var maxRow = parseInt(document.getElementById("maxRow").value);

    var table = document.getElementById("myTable");
    var output = "";

    // If the user puts invalid values after already creating a table,
    // the current table on screen will stay up until user fixes input(s)
    if (minCol < -50 || minCol > 50) {
        return;
    }

    if (maxCol < minCol || maxCol > 50) {
        return;
    }

    if (minRow < -50 || minRow > 50) {
        return;
    }

    if (maxRow < minRow || maxRow > 50) {
        return;
    }

    // Makes the top row of table listing the user's min to max row values 
    for (var x = 0; x < 1; x++) {
        output += "<tr>";
        output += "<th>&times;</th>";
        for (var y = minRow; y <= maxRow; y++) {
            output += "<th>" + y + "</th>";
        }
        output += "</tr>";
    }

    // Makes the cells with output of multiplying
    for (var i = minCol; i <= maxCol; i++) {
        output += "<tr>";
        
        // Listing the next col value of the user's input values before doing
        // multiplication
        output += "<th>" + i + "</th>";
        for (var j = minRow; j <= maxRow; j++) {
            
            output += "<td>" + (i * j) + "</td>";
        }
        output += "</tr>";
    }
    table.innerHTML = output;
}