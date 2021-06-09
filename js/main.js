var getUserName = prompt("Hello! Who are you? Please provide your name: ");

console.log(getUserName);

document.getElementById("amr").innerText = getUserName;

//tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })