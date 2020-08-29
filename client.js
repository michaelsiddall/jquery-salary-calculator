$(document).ready(onReady);

let employee = [];
let totalAnnualSalary = 0;
maxMonthlyCost = 20000;

console.log(employee);

function addEmployee() {
  console.log("in addEmployee");

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
  // empty inputs
  $("#firstNameIn").val(""),
    $("#lastNameIn").val(""),
    $("#idNumberIn").val(""),
    $("#titleIn").val(""),
    $("#annualSalaryIn").val(""),
    displayEmployeeTable();
  //display employees
} // end addEmployee

function onReady() {
  console.log("Lets go!");
  //capture click event

  $("#addEmployeeBtn").on("click", addEmployee);
  console.log("added Employee");
}

function displayEmployeeTable() {
  console.log("in displayEmployeeTable");
  //target an ul element on DOM
  let el = $(".employeeData");
  // empty el
  el.empty();
  // loop through array
  for (let i = 0; i < employee.length; i++) {
    // append each item to the ul
    el.append(
      `<tr><td>${employee[i].firstName}</td><td>${employee[i].lastName}</td><td>${employee[i].idNumber}</td><td>${employee[i].title}</td><td>${employee[i].annualSalary}</td></tr>`
    );
  }
  monthlyCosts();
}

function monthlyCosts() {
  console.log("in monthlyCosts");

  // loop through employee array
  for (let i = 0; i < employee.length; i++) {
    // for all employee, add up total annual salary
    totalAnnualSalary += Number(employee[i].annualSalary);
    let totalMonthlyCosts = totalAnnualSalary / 12;
    if (totalMonthlyCosts >= maxMonthlyCost) {
      $("#totalMonthlyCostsOut").css("background-color", "red");
    }
    console.log("totalMonthlyCosts", totalMonthlyCosts);
    let el = $("#totalMonthlyCostsOut");
    el.empty();
    el.append(totalMonthlyCosts);
    return totalMonthlyCosts;
  }

  // end for

  // determine monthly salary for each employee
}
