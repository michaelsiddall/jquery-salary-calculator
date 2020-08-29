$(document).ready(onReady);

let employee = [{}];

console.log(employee);

function addEmployee() {
  console.log("in addEmployee", addEmployee);
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
  //display employees
} // end addEmployee

function onReady() {
  console.log("Lets go!");
  //capture click event on
  $(document).on("click", "addEmployeeBtn", addEmployee);
  console.log("clicked button");
}
