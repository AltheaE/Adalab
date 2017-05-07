var daysList = document.getElementById('js-bDay');

for (var i = 1; i <= 31; i++) {
    var option = document.createElement("option");
    option.value = [i];
    option.text = [i];
    daysList.appendChild(option);
}

var monthsList = document.getElementById('js-bMonth');
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

for (var i = 0; i < months.length; i++) {
  var option = document.createElement("option");
  option.value = months[i];
  option.text = months[i];
  monthsList.appendChild(option);
}

var yearsList = document.getElementById('js-bYear');

for (var i = 1900; i <= 2010; i++) {
    var option = document.createElement("option");
    option.value = [i];
    option.text = [i];
    yearsList.appendChild(option);
}

var userName = document.querySelector('#js-name');
var mail = document.querySelector('#js-mail');
var checkMail = document.querySelector('#js-checkMail');
var createAnswer = document.querySelector('#js-createAnswer');

function createAccount() {
  if ((mail.value === checkMail.value) && (mail.value !== "")) {
    createAnswer.innerHTML = "Thank you, " + userName.value + ", has been activated successfully";
  }
  else {
    createAnswer.innerHTML = "You need to enter a valid mail (name@gmail.com)";
    mail.style.border= "1px solid red"
    checkMail.style.border = "1px solid red"
  }
}

var submitButton = document.querySelector('.button-submit');
btnCreate.addEventListener("click", createAccount);
