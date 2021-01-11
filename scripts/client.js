console.log ('js');
$(document).ready(readyNow);

function readyNow() {
    $(#submitButton).on('click', addEmployee); // adds employee to table on "submit" click
    $(#submitButton).on('click', compileSalary); // figures salary to "Montly Total" on click
}

let employees = [];
let index = 0; 
let monthlyTotal= "$" + 0; 

function addEmployee() {
    let firstName = $("#firstName").val();
    let lastname = $("#lastName").val();
    let id = $("#id").val();
    let title = $("#title").val();
    let salary = $("#salary").val();

    let employeeStats = $(`<tr><th>${firstName}`);
    $('tableBody').append(addEmployee);


}



// $('table').on('click', deleteEmployee);
// $('table').on('click', compileSalary);