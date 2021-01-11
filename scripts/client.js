console.log ('js');
$(document).ready(readyNow);

function readyNow() {
    $('#submitButton').on('click', addEmployees); // adds employees to table on "submit" click
    $('#submitButton').on('click', compileSalary); // figures salary to "Monthly Total" on click
    $('table').on('click', '.delete', removeEmployeeStats); // deletes employee
    $('table').on('click', '.delete', compileSalary); // recompiles for removed employee

};

let employees = [];
let i = 0; 
let monthlyTotal= "$" + 0; 

function addEmployees() { // gets values from input boxes
    let firstName = $('#firstName').val(); // sets employee stats 
    let lastName = $("#lastName").val();
    let id = $("#id").val();
    let title = $("#title").val();
    let salary = $("#salary").val();
    
    let employeeStats = $(`<tr><td>${firstName}</td><td>${lastName}</td><td class="id">${id}</td><td>${title}</td><td>${salary}</td></tr>`);
    $('.tableBody').append(employeeStats);

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

}

function compileSalary() { // compiles monthly salary
    let monthlySalary = 0;
    let salaryArray = employees;
    
    for (let i = 0; i < salaryArray.length; i++); { // loops through salaries
        monthlySalary += Number(salaryArray[i].salary);
    }

    monthlySalary /= 12; // divides annual salary by 12
    $("h3").remove();
    $(".monthlyTotal").append("<h3>Monthly Salary Total: $");

    if (monthlySalary >= 20000) {
        ("h3")
    }
}

function removeEmployeeStats(array, id) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            employees.splice(i, 1);

        }
    }
}

