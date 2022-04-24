
// JS:




//getting the values from webClient.html
var userName = window.localStorage.getItem("0");  
console.log(userName);
console.log("sgedgbes");


var nickName = window.localStorage.getItem("1");  
console.log(nickName);

var passWord = window.localStorage.getItem("2");  
console.log(passWord);

var picture = window.localStorage.getItem("3");  
console.log(picture);

let data = [userName, nickName, passWord, picture ];
let list = document.getElementById("myList");
  
data.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
})


// let picture1 = document.getElementById("myPic");
function GFG_Fun() {
  var img = document.createElement('img');
  img.src ='loggin.jpg';
  document.getElementById('body').appendChild(img);
  // down.innerHTML = "Image Element Added.";
}