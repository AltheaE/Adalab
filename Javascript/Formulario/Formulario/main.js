var dayMenu = document.getElementById('js_menuDay');

for (var i = 1; i <= 31; i++) {
    var option = document.createElement("option");
    option.value = [i];
    option.text = [i];
    dayMenu.appendChild(option);
}

var monthMenu = document.getElementById('js_menuMonth');
var months = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"];

for (var i = 0; i < months.length; i++) {
  var option = document.createElement("option");
  option.value = months[i];
  option.text = months[i];
  monthMenu.appendChild(option);
}

var yearMenu = document.getElementById('js_menuYear');

for (var i = 1900; i <= 2017; i++) {
    var option = document.createElement("option");
    option.value = [i];
    option.text = [i];
    yearMenu.appendChild(option);
}

var userName = document.querySelector('#js_input_name');
var mail = document.querySelector('#js_input_mail');
var repMail = document.querySelector('#js_input_repMail');
var feedback = document.querySelector('#js_feedback');

function createAccount() {
  if ((mail.value === repMail.value) && (mail.value !== "")) {
    feedback.innerHTML = "Thank you, " + userName.value + ", has been activated successfully";
  }
  else {
    feedback.innerHTML = "You need to enter a valid mail (name@gmail.com)";
    mail.style.border= "1px solid red"
    repMail.style.border = "1px solid red"
  }
}

var createButton = document.querySelector('#btnCreate');
createButton.addEventListener("click", createAccount);
