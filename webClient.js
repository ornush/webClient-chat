//alert("connected to webClinet.html")

// shift+alt+f -arrange the code

const form = document.querySelector('.form-container form');
const inputs = document.querySelectorAll('form input');


// name & nick name
var validname = 1
var validpass=1
var validnick = 1

// var inVal = [];
// saving the input
form.addEventListener('submit', (e) => {
  e.preventDefault();
  inputs.forEach(input => {
    // console.log("|" + typeof (input.value) + "|")
    console.log("|" + (input.value) + "|")
    if (input.type == "text") {
      if (input.value.length < 2) {
        console.log("Error-user name needs to be atleast with 1 charachters");
        validname = 0

      }
      console.log("t->" + input.value);
    }
    //password
    if (input.type == "password") {
      if (input.length < 4) {
        console.log("Error-user nick name needs to be atleast with 4 charachters");
        validpass = 0

      }
      console.log("password");
    }
    //file
    if (input.type == "file") {
      if (input.value.length <= 0) {
        console.log("Error-user name needs to be atleast with 6 charachters");
      }
      console.log("password");
    }
    redirect();
  }
  );
});


function redirect(event) {
  console.log("validname--->>>>" + typeof (validname));
  if ((validname == 1) && (validnick == 1)) {
    window.location.href = "chat.html";
  }
  console.log("password");




}


