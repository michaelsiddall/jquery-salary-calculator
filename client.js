$(document).ready(onReady);

let employee = [];

console.log(employee);

function addEmployee() {
  // get user input & place into new object
  const newEmployee = {
    firstName: $("#firstNameIn").val(),
    lastName: $("#lastNameIn").val(),
    idNumber: $("#idNumberIn").val(),
    title: $("#titleIn").val(),
    annualSalary: $("#annualSalaryIn").val(),
  }; // end new item
  //push new object into our array
  employee.push(newEmployee);
  displayEmployee();
  //display employees
} // end addEmployee

function onReady() {
  console.log("Lets go!");
  //capture click event

  $("#addEmployeeBtn").on("click", addEmployee);
  console.log("clicked button", $(this));
}

function displayEmployee() {
  console.log("in displayEmployee");
  //target an ul element on DOM
  let el = $("#employeeOut");
  // empty el
  el.empty();
  // loop through array
  for (let i = 0; i < employee.length; i++) {
    // append each item to the ul
    el.append(
      `<li>${employee[i].firstName} ${employee[i].lastName}, ${employee[i].idNumber}, ${employee[i].title}, ${employee[i].annualSalary}</li>`
    );
  }
}

function monthlyCosts(employee) {
  let totalAnnualSalary = 0;
  // loop through employee array
  for (let i = 0; i <employee.length, i++) {
    // for all employee, add up total annual salary
    totalAnnualSalary = totalAnnualSalary += Number(employee[i].annualSalary);
    // determine monthly salary for each employee
    let totalMonthlySalary = totalAnnualSalary / 12;
    
  }
}
