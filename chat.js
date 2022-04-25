
// JS:
//getting the values from webClient.html


// function show() {
// console.log("recordddddddddddddd")
// navigator.mediaDevices.getUserMedia({audio:true})
// .then(stream =>{

//   MediaRecorder = new MediaRecorder(stream)
//   MediaRecorder.start()
  // chuck = []

//   MediaRecorder.addEventListener("dataavailable",e =>{
//   chuck.push(e.data)
//   })
//   MediaRecorder.addEventListener("stop",e =>{
// blob = new Blob(chuck)
// audio_url =URL.createObjectURL(blob)
// audio =new Audio(audio_url)
// audio.setAttribute("controls",1)
// onkeydown.appendChild(audio)
//   })
// })
// }

// function show2(){
//   console.log("rstopdd")

//   MediaRecorder.stop;

// }

document.body.onload = addElement;

function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}


// const user1 = ["Michael", "mike","loggin.jpg"];
// document.getElementById("user1").innerHTML = user1;

// const user2 = ["Sarah", "sara"];
// document.getElementById("user2").innerHTML = user2;

// const user3 = ["David", "dav34"];
// document.getElementById("user3").innerHTML = user3;



// var userName = window.localStorage.getItem("0");  
// console.log(userName);
// console.log("sgedgbes");

// var nickName = window.localStorage.getItem("1");  
// console.log(nickName);

// var passWord = window.localStorage.getItem("2");  
// console.log(passWord);

// var picture = window.localStorage.getItem("3");  
// console.log(picture);

// let data = [userName, nickName, passWord, picture ];
// let list = document.getElementById("myList");
  
// data.forEach((item)=>{
//   let ul = document.createElement("ul");
//   ul.innerText = item;
//   list.appendChild(ul);
// })


// // let picture1 = document.getElementById("myPic");
// function GFG_Fun() {
//   var img = document.createElement('img');
//   img.src ='loggin.jpg';
//   document.getElementById('body').appendChild(img);
//   // down.innerHTML = "Image Element Added.";
// }


/////////////////////////



