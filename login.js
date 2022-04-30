//alert("connected to webClinet.html")

// shift+alt+f -arrange the code
var inVal = [];
// name & nick name
var validname = 1
var validpass = 1
var validnick = 1
var myFormData = [];   //declare an array


const form = document.querySelector('.form-container form');
const inputs = document.querySelectorAll('form input');


// saving the form input 
form.addEventListener('submit', (e) => {
  e.preventDefault(); inputs.forEach(input => {
    // console.log("|" + typeof (input.value) + "|")
    // let errorMsg;

    let messages = []

    // console.log("iddd|" + (input.name) + "|")
    inVal.push(input.value);
    // localStorage.setItem('username', input.value);

    // document.getElementById('demo').style.display = "none";

    if (input.name == "username") {
      if (input.value.length < 2) {
        // errorMsg="Error-user name needs to be atleast with 1 charachters";
        const errorElement = document.getElementById('error')
        messages.push('user name should be atleast 4 charachters')
        errorElement.innerText = messages.join(', ')
        // document.getElementById("demo").innerHTML = errorMsg;
        // document.getElementById('demo').style.display = "block";


        // console.log("Error-user name needs to be atleast with 1 charachters");
        validname = 0

      }
    }
    //password
    if (input.name == "pswd") {
      if (input.value.length < 4) {
        // console.log(input.length+"length of paaword")
        // console.log("Error-password should be atleast with 4 charachters");
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
  // console.log("validname--->>>>" + typeof (validname));
  if ((validname == 1) && (validnick == 1) &&  (validpass==1)) {
    window.location.href = "chat.html";
  }
}
// arrDetails={name:"name",nick:"nick" ,pass:"pass",file:"file"};

  // local storage all the values
function forr() {
  console.log("loop");
  for (var i = 0; i < 4; i++) {
    console.log(inVal[i]);
    myFormData.push(inVal[0]);
//passingg the values to chat.html
    var userName = inVal[0];  
    window.localStorage.setItem("0", userName);  

    var nickName = inVal[1];  
    window.localStorage.setItem("1", nickName);  


    window.localStorage.setItem("2", "login");  


  }
  console.log("loop");
  console.log("inVal1-<<<"+inVal[0]);
  console.log("inVal1-<<<"+inVal[1]);
  // console.log("inVal1-<<<"+inVal[0]);

}
