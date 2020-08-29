$(document).ready(onReady);

let employee = [{}];

console.log(employee);

function addEmployee() {
  console.log("in addEmployee");
  // get user ipur & place into new object
  const newEmployee = {
    firstName: $("#firstNameIn").val(),
    lastName: $("#lastNameIn").val(),
    idNumber: $("#idNumberIn").val(),
    title: $("#titleIn").val(),
    annualSalary: $("#annualSalaryIn").val(),
  };
}

function onReady() {
  console.log("Lets go!");
}
