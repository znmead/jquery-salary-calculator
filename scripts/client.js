console.log ('js');
$(document).ready(readyNow);

function readyNow() {
    $('#submitButton').on('click', addEmployees); // adds employees to table on "submit" click
   //  $('#submitButton').on('click', compileSalary); // figures salary to "Montly Total" on click
};

let employees = [];
let index = 0; 
let monthlyTotal= "$" + 0; 

function addEmployees() { // gets values from input boxes
    let firstName = $('#firstName').val(); // sets employee stats 
    let lastname = $("#lastName").val();
    let id = $("#id").val();
    let title = $("#title").val();
    let salary = $("#salary").val();
    }   

    let employeeStats = $(`<tr><td>${firstName}</td><td>${lastName}</td><td class="id">${id}</td><td>${title}</td><td>button>Delete</td></tr>`);
    $('tableBody').append(employeeStats);

    let newEmployee = {
        firstName: firstName,
        lastName: lastName,
        id: id,
        title: title,
        salary: salary,
    }
    employees.push(newEmployee);

    $('#firstName').val(''); // clears fields after input submission
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#salary').val('');






// $('table').on('click', deleteEmployee);
// $('table').on('click', compileSalary);