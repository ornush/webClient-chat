//alert("connected to webClinet.html")

// shift+alt+f -arrange the code
 var inVal = [];
// name & nick name
var validname = 1
var validpass = 1
var validnick = 1
var validConfirmpass = 1
var passCheck;
var myFormData = [];   //declare an array


const form = document.querySelector('.form-container form');
const inputs = document.querySelectorAll('form input');


// saving the form input 
form.addEventListener('submit', (e) => {
  e.preventDefault(); inputs.forEach(input => {
    // console.log("|" + typeof (input.value) + "|")
    // let errorMsg;

    let messages = []
    console.log("iddd|" + (input.name) + "|")
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
    //nickname
    if (input.name == "nickname") {
      if (input.value.length < 2) {
        // console.log("Error-nickname needs to be atleast with 1 charachters");
        const errorElement = document.getElementById('error2')
        messages.push('nick name should be atleast 4 charachters')
        errorElement.innerText = messages.join(', ')
        validname = 0

      }
    }
    //password
    
    if (input.name == "pswd") {
      passCheck=input.value;
      console.log("chekkkkk->>"+passCheck)
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
///confirmation password
    if (input.name == "confirmPsw") {
      // console.log("chekkkkk innnnn->>"+passCheck)
      // console.log("chekkkkk innnnn->>"+input.value)

      if (passCheck!=input.value) {
        // console.log(input.length+"length of paaword")
        // console.log("Error-password should be atleast with 4 charachters");
        const errorElement = document.getElementById('error4')
        messages.push('the password is not correct')
        errorElement.innerText = messages.join(', ')
        validConfirmpass = 0

      }
      // console.log("password");
    }


    if (input.name == "picture") {
      // if (input.value.length <= 0) {
      //   console.log("Error-user name needs to be atleast with 6 charachters");
      // }

      /////  תנאי לתמונהההההההההה אם יש.אין
      console.log("full path")

     var pic= document.getElementById("picture-upload").files[0].name; 
     inVal[4]=pic;
console.log("full path->"+ inVal[4])
    }

  });
 //passing to another html file -to chat.html
  redirect();

});

//redirect to another html page
function redirect(event) {
  forr();
  // console.log("validname--->>>>" + typeof (validname));
  if ((validname == 1) && (validnick == 1) &&  (validpass==1)&&(validConfirmpass ==1)) {
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

var passWord = inVal[2];  
window.localStorage.setItem("2", passWord);  

var conf = inVal[3];  
window.localStorage.setItem("3", conf);  

var picture = inVal[4];  
window.localStorage.setItem("4", picture);  

// var signUp="signUp"
window.localStorage.setItem("5", "signup");  

    
   
  }
  console.log("loop");
  console.log("inVal1-<<<"+inVal[0]);
  console.log("inVal1-<<<"+inVal[1]);
  // console.log("inVal1-<<<"+inVal[0]);


  

//   var fso = new ActiveXObject("Scripting.FileSystemObject");
// var a = fso.CreateTextFile("C:\Users\ornush\source\webClient\webClient-chat\testfile.txt", true);
// a.WriteLine("This is a test."+inVal[0]);
// a.Close();


}

// const inputName = document.getElementById("username");

// console.log("finarfszggggggggggggggggggl--:>"+inputName);


// var myFormData = [];   //declare an array
// var value1 = document.getElementById("username").value;  //get the value of an element by it's id
// myFormData.push(value1);
// console.log("forn data:>"+myFormData);


// module.exports = {
//   name: 'GeeksforGngggggggggggggggggggggggggggnnneeks',
//   website: 'https://geeksforgeeks.org'
// }


