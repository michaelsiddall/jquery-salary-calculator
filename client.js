$(document).ready(onReady);

let employee = [];

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

function deleteBtn() {
  let thisRow = $(this).closest("tr");
  thisRow.remove();
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
// function requireAllInputs
//   if ({$firstNameIn} {$lastNameIn} {$idNumberIn} {$titleIn} {$annualSalaryIn}) {
//     newFunction();
// } else {
//   alert("This form will not submit");

// }
function monthlyCosts() {
  console.log("in monthlyCosts");
  let totalAnnualSalary = 0;

  // loop through employee array
  $("#totalMonthlyCostsOut").val("");
  for (let i = 0; i < employee.length; i++) {
    // for all employee, add up total annual salary
    let salary = employee[i].annualSalary;
    let salaryNumber = Number(salary);
    let dividedMonthly = salaryNumber / 12;
    // annual salary converted to monthly salary
    totalAnnualSalary += dividedMonthly;
    // nfObject = new Intl.NumberFormat("en-US");
    // output = nfObject.format(totalAnnualSalary);
    //conditional if monthly >== $20,0000
    if (totalAnnualSalary > maxMonthlyCost) {
      $("#totalMonthlyCostsOut").css("background-color", "red");
    }

    //console.log("totalMonthlyCosts", totalMonthlyCosts);
    $("#totalMonthlyCostsOut").val("");
    $("#totalMonthlyCostsOut").text(totalAnnualSalary.toFixed(2));

    //return totalMonthlyCosts;

    // end for
  }
}

function onReady() {
  console.log("Lets go!");
  //capture click event

  $(document).on("click", "#addEmployeeBtn", addEmployee);

  $(document).on("click", ".deleteBtn", deleteBtn);
}
