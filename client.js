$(document).ready(onReady);

let employee = [];
maxMonthlyCost = 20000;

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

function deleteBtn() {
  let thisRow = $(this).closest("tr");
  thisRow.remove();
}
function displayEmployeeTable() {
  console.log("in displayEmployeeTable");
  //target an table element on DOM
  // $("#firstNameIn").val(""),
  //   $("#lastNameIn").val(""),
  //   $("#idNumberIn").val(""),
  //   $("#titleIn").val(""),
  //   $("#annualSalaryIn").val("");
  let el = $(".employeeData");
  // empty el
  el.empty();
  // // loop through array
  for (let i = 0; i < employee.length; i++) {
    // append each item to the table

    el.append(
      `<tr>
      <td>${employee[i].firstName}</td>
      <td>${employee[i].lastName}</td>
      <td>${employee[i].idNumber}</td>
      <td>${employee[i].title}</td>
      <td>$${employee[i].annualSalary}</td>
      <td><button type="submit" class="deleteBtn">Delete</button>
      </tr>`
    );
  }
  monthlyCosts();
}

function monthlyCosts() {
  console.log("in monthlyCosts");
  let totalAnnualSalary = 0;
  // loop through employee array
  // $("#totalMonthlyCostsOut").val("");
  for (let i = 0; i < employee.length; i++) {
    // for all employee, add up total annual salary
    totalAnnualSalary = totalAnnualSalary + employee[i].annualSalary / 12;
    let totalMonthlyCost = Number(totalAnnualSalary);

    if (totalMonthlyCost > maxMonthlyCost) {
      $("#totalMonthlyCostsOut").css("background-color", "red");
    }
    $("#totalMonthlyCostsOut").val("");
    $("#totalMonthlyCostsOut").text(totalMonthlyCost.toFixed(2));

    // end for
  }
}

function onReady() {
  console.log("Lets go!");
  //capture click event

  $(document).on("click", "#addEmployeeBtn", addEmployee);

  $(document).on("click", ".deleteBtn", deleteBtn);
}
