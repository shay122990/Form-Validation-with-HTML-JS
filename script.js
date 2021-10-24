const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let formValidation = false;
let passwordsMatch = false;

function validateFrom() {
  //Using constraint API
  formValidation = form.checkValidity();
  //Style main message for an error
  if (!formValidation) {
    message.textContent = "Please fill in all fields.";
    message.style.color = "sienna";
    messageContainer.style.borderColor = "sienna";
    return;
  }
  //Check if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = "seagreen";
    password2El.style.borderColor = "seagreen";
  } else {
    passwordsMatch = false;
    message.textContent = "Please enter same password.";
    message.style.color = "sienna";
    messageContainer.style.borderColor = "sienna";
    password1El.style.borderColor = "sienna";
    password2El.style.borderColor = "sienna";
    return;
  }
  //If form is valid and passwords match
  if (formValidation && passwordsMatch) {
    message.textContent = "Successfully Registered!";
    message.style.color = "seagreen";
    messageContainer.style.borderColor = "seagreen";
  }
}

//This is just for the purposes of learning, it's not best practice to store any passwords or any user information on the fronend. 
//In real life project you would ecrpyt the message with https and send it to a server securely.
//As for frontend development, make sure your password requirement is complex
function storeFromData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value
  }
  //Pass data to DB 
  console.log(user);
}


function processFromData(e) {
  e.preventDefault();
  // Validate form
  validateFrom();
  //Submit data if valid
  if (formValidation && passwordsMatch) {
    storeFromData();
  }
}






// Event Listener ------------------------------------ //
form.addEventListener('submit', processFromData);