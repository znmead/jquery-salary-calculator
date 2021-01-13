console.log('js');
$(document).ready(readyNow);

function readyNow() {
    $('#submitButton').on('click', addEmployees); // adds employees to table on "submit" click
    $('#submitButton').on('click', compileSalary); // figures salary to "Monthly Total" on click

};

let employees = [];
let i = 0;
let monthlySalary = 0;

function addEmployees() { // gets values from input boxes
    let firstName = $('#firstName').val(); // sets employee stats 
    let lastName = $("#lastName").val();
    let id = $("#id").val();
    let title = $("#title").val();
    let salary = $("#salary").val();

    if (!firstName || !lastName || !id || !title || !salary) { // validates all input fields have values entered
        prompt("Please complete all input sections");
        return;
    }

    let employeeStats = $(`
    <tr><td>${firstName}</td> 
    <td>${lastName}</td>
    <td class="id">${id}</td>
    <td>${title}</td>
    <td>${salary}</td>
    <td><button class="delete">Delete</button></td></tr>`);
    $('.tableBody').append(employeeStats);
    $('.deleteButton').off('click');
    $('#employeeTable').on('click', '.delete', deleteRow); // deletes employee
    // $('#employeeTable').on('click', '.delete', compileSalary); // recompiles for removed employee

    let newEmployee = { // creates newEmployee object
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

    compileSalary();
}

function compileSalary() {
    let employeeArray = employees;
    monthlySalary = 0;
    for (let i = 0; i < employeeArray.length; i++) {
        monthlySalary += Number(employeeArray[i].salary)
    }
    monthlySalary /= 12;
    $("#monthlyTotal").empty();
    $("#monthlyTotal").append(monthlySalary);
    if (monthlySalary >= 20000) {
        $(".monthlyTotal").addClass("overBudget");
        console.log(monthlySalary);

    }
    $('total-monthly').text(monthlySalary.toFixed(2)); // rounds 
}

function deleteRow(event) {
    let newCell = $(event.target).parent().prev(); // targets
    $(event.target).closest('tr').remove(); // removes/deletes
    compileSalary();
}








/* let monthlySalary = 0;
let salaryArray = employees;

for (let i = 0; i < salaryArray.length; i++); { // loops through salaries
    monthlySalary += Number(salaryArray[i].salary);
    monthlySalary /= 12; // divides annual salary by 12
}


$("#monthlyTotal").append("<h3>Monthly Salary Total: $ </h3>");
 if (monthlyTotal >= 20000) {
    ("h3").css("background-color", "red"); // sets background to red if monthly costs exceed $20,000
}

    if (monthlySalary >= "20000"); {
            $("h3").css("background-color", "red"); // sets background to red if monthly costs exceed $20,000
        }

function removeEmployeeStats() {
    for (i = 0; i < employeeArray.length; i++) {
        if (employeeArray[i].id === id) {
            employees.splice(i, 1);
        }
    }
}
// ${this.closest}

// event.target to remove...

function deleteRow(event) {
    $ { event.target }.parent().parent().remove();
    $ { event.target }.closest('tr').remove();
}

const salaryCell = $(event.target).parent().prev();
const salary = Number(salaryCell.text());


} */