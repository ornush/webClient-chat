
// JS:
//getting the values from webClient.html


const user1 = ["Michael", "mike","loggin.jpg"];
document.getElementById("user1").innerHTML = user1;

const user2 = ["Sarah", "sara"];
document.getElementById("user2").innerHTML = user2;

const user3 = ["David", "dav34"];
document.getElementById("user3").innerHTML = user3;



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
  let ul = document.createElement("ul");
  ul.innerText = item;
  list.appendChild(ul);
})


// let picture1 = document.getElementById("myPic");
function GFG_Fun() {
  var img = document.createElement('img');
  img.src ='loggin.jpg';
  document.getElementById('body').appendChild(img);
  // down.innerHTML = "Image Element Added.";
}


/////////////////////////



