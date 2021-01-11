console.log ('js');
$(document).ready(readyNow);

function readyNow() {
    $(#submitButton).on('click', addEmployee);
    $(#submitButton).on('click', compileSalary);
}

let employees = [];
let index = 0; 
let monthlyTotal= "$" + 0; 





// $('table').on('click', deleteEmployee);
// $('table').on('click', compileSalary);