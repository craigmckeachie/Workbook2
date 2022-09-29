// if (departmentCode == 1) {
//   console.log("Marketing");
// } else if (departmentCode == 5) {
//   console.log("Human Resources");
// } else if (departmentCode == 10) {
//   console.log("Accounting");
// } else {
//   console.log("Invalid Code");
// }

let departmentCode = 10;
switch (departmentCode) {
  case 0:
  case 1:
    console.log("Marketing");
    break;
  case 5:
    console.log("Human Resources");
    break;
  case 10:
    console.log("Accounting");
    break;
  default:
    console.log("Invalid Code");
    break;
}
