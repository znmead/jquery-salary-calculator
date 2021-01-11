console.log ('js');
$(document).ready(readyNow);

function readyNow() {
    $('#submitButton').on('click', addEmployees); // adds employees to table on "submit" click
    $('#submitButton').on('click', compileSalary); // figures salary to "Monthly Total" on click
    $('#deleteButton').on('click', '.delete', removeEmployeeStats); // deletes employee
    $('#deleteButton').on('click', '.delete', compileSalary); // recompiles for removed employee

};

let employees = [];
let i = 0; 


function addEmployees() { // gets values from input boxes
    let firstName = $('#firstName').val(); // sets employee stats 
    let lastName = $("#lastName").val();
    let id = $("#id").val();
    let title = $("#title").val();
    let salary = $("#salary").val();

    if (!firstName || !lastName || !id || !title || !salary) {
        prompt("Please complete all input sections");
        return null;
    }
    
    let employeeStats = $(`
    <tr><td>${firstName}</td>
    <td>${lastName}</td>
    <td class="id">${id}</td>
    <td>${title}</td>
    <td>${salary}</td>`);
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

    let monthlySalary = 0;
    function compileSalary() {
        let employeeArray = employees;

        for(let i = 0; i < employeeArray.length; i++) {
            monthlySalary += Number(employeeArray[i].salary)
        }
        monthlySalary /= 12;
        $("#monthlyTotal").append((monthlySalary));
            if (monthlySalary >= "20000"); {
            $("h3").css("background-color", "red"); // sets background to red if monthly costs exceed $20,000
        }
    }

    function removeEmployeeStats(array, id) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
            employees.splice(i, 1);
        }
    }
}

/* let monthlySalary = 0;
let salaryArray = employees;

for (let i = 0; i < salaryArray.length; i++); { // loops through salaries
    monthlySalary += Number(salaryArray[i].salary);
    monthlySalary /= 12; // divides annual salary by 12
}

$("h3").remove;
$("#monthlyTotal").append("<h3>Monthly Salary Total: $ </h3>");
 if (monthlyTotal >= 20000) {
    ("h3").css("background-color", "red"); // sets background to red if monthly costs exceed $20,000
}

} */ 
