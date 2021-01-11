console.log ('js');
$(document).ready(readyNow);

function readyNow() {
    $(#submitButton).on('click', addEmployee); // adds employee to table on "submit" click
    $(#submitButton).on('click', compileSalary); // figures salary to "Montly Total" on click
}

let employees = [];
let index = 0; 
let monthlyTotal= "$" + 0; 





// $('table').on('click', deleteEmployee);
// $('table').on('click', compileSalary);