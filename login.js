//alert("connected to webClinet.html")

// shift+alt+f -arrange the code
var inVal = [];
// name & nick name
var validname = 1 ;
var validpass = 1;
var userExist = 0;
var myFormData = [];   //declare an array

// users //
const users = [
  { username: 'Brian1', password: 'a1234'},{ username: 'Trevor1', password: 'b1234',},
  { username: 'Jonathan1', password: 'c1234'},{ username: 'Joshua1', password: 'd1234'},
  { username: 'Ruth1', password: 'e1234'},{ username: 'Anne1', password: 'f1234'},
  { username: 'Abigail1', password: 'g1234'}];


const form = document.querySelector('.form-container form');
const inputs = document.querySelectorAll('form input');


// saving the form input 
form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  inputs.forEach(input => {


    let messages = []

    inVal.push(input.value);


    if (input.name == "username") {
      
      if(input.value!="Brian1" && input.value!="Trevor1" && input.value!="Jonathan1" &&
      input.value!="Joshua1" && input.value!="Ruth1" &&  input.value!="Anne1" &&
       input.value!="Abigail1"){

      const errorElement1 = document.getElementById("error5")
      messages.push("This username does not exist")
      errorElement1.innerText = messages.join(', ')
      validname = 0

    }
      if (input.value.length < 2) {
        const errorElement = document.getElementById('error')
        messages.push('user name should be atleast 4 charachters')
        errorElement.innerText = messages.join(', ')
        validname = 0

      }
    }
    //password
    if (input.name == "pswd") {

      if(input.value!= "a1234" && input.value!="b1234" && input.value!="c1234" &&
      input.value!="d1234" && input.value!="e1234" &&  input.value!="f1234" &&
       input.value!="g1234"){

      const errorElement1 = document.getElementById("error6")
      messages.push("This password is incorrect")
      errorElement1.innerText = messages.join(', ')
      validname = 0

    }




      if (input.value.length < 4) {

        const errorElement = document.getElementById('error3')
        messages.push('password should be atleast 4 charachters')
        errorElement.innerText = messages.join(', ')
        validpass = 0

      }
      // console.log("password");
    }
  
  });
 //passing to another html file -to chat.html
  redirect();

  

});

//redirect to another html page
function redirect(event) {
  forr();
  if ((validname == 1) && (validpass == 1)) {
    if(userExist){
      window.location.href = "chat.html";
    }
  }
}

  // local storage all the values
function forr() {
  for (var i = 0; i < 4; i++) {
    myFormData.push(inVal[0]);
    //passingg the values to chat.html
    var userName = inVal[0];  
    window.localStorage.setItem("0", userName);  

    var password = inVal[1];  
    window.localStorage.setItem("1", password);  


    window.localStorage.setItem("2", "login");  


  }

  for(let user of users){
    if((userName == user.username) && (password == user.password)){
      userExist = 1;
      return;
    }
   }  
}
