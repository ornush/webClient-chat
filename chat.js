
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




// document.body.onload = addElement;

// function addElement () {
//   // create a new div element
//   const newDiv = document.createElement("div");

//   // and give it some content
//   const newContent = document.createTextNode("Hi there and greetings!");

//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);

//   // add the newly created element and its content into the DOM
//   const currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }




// const user1 = ["Michael", "mike","loggin.jpg"];
// document.getElementById("user1").innerHTML = user1;

// const user2 = ["Sarah", "sara"];
// document.getElementById("user2").innerHTML = user2;

// const user3 = ["David", "dav34"];
// document.getElementById("user3").innerHTML = user3;


//                   myUser 

// var userName = window.localStorage.getItem("0");
// // console.log(userName);

// var nickName = window.localStorage.getItem("1");
// // console.log(nickName);

// var passWord = window.localStorage.getItem("2");
// // console.log(passWord);

// var picture = window.localStorage.getItem("3");
// // console.log(picture);

// let data = [userName, nickName, passWord, picture];

// let list = document.getElementById("myList");


// let ul = document.createElement("ul");
// ul.innerText = data[0];
//   list.appendChild(ul);

//   let ul2 = document.createElement("ul");
//   ul2.innerText = data[1];
//   list.appendChild(ul);

// console.log("data-<<<" + data);

// console.log(list);

// data.innerText=data;

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


////////////////////////////////

let usersMsgs = [["Hi"], ["Hello"], ["How are you?"], ["uuuu"], ["zzzz"], ["tttt"]];

const users = [
  { username: 'Brian1', nickname: 'Brian', password: 'e1234', picture: "man1.JPG", list: usersMsgs[0], firstClick: true },
  { username: 'Trevor1', nickname: 'Trevor', password: 'a1234', picture: "man2.JPG", list: usersMsgs[1], firstClick: true },
  { username: 'Jonathan1', nickname: 'Jonathan', password: 'w1234', picture: "man3.JPG", list: usersMsgs[2], firstClick: true },
  { username: 'Joshua1', nickname: 'Joshua', password: 's1234', picture: "man4.JPG", list: usersMsgs[3], firstClick: true },
  { username: 'Ruth1', nickname: 'Ruth', password: 'e1234', picture: "woman1.JPG", list: usersMsgs[4], firstClick: true },
  { username: 'Anne1', nickname: 'Anne', password: 'q1234', picture: "woman2.JPG", list: usersMsgs[5], firstClick: true },
  { username: 'Abigail1', nickname: 'Abigail', password: 'q1234', picture: "woman3.JPG", list: usersMsgs[6], firstClick: true }];

var pages = true;

// <div class="settings-tray">
//   <img class="profile-image" src="loggin.jpg" alt="profile image">

//   <span class="settings-tray--right ">
//     <!-- icons -->
//     <i class="bi bi-person-plus" style="color: black; float: right;" onclick="modal()"></i>
//   </span>
// </div>


function getRandomTime() {
  let h = Math.floor(Math.random() * 24);
  let m = Math.floor(Math.random() * 60);
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  let res = h + ":" + m;
  return res;
}

function myProfile(user) {
  let firstDiv = document.createElement("div");
  let secondDiv = document.createElement("div");
  let img = document.createElement("img");
  let span = document.createElement("span");
  let i = document.createElement("i");
  let h = document.createElement("h5");
  h.classList.add("uName");
  h.innerText = user.nickname;
  firstDiv.classList.add("settings-tray");
  img.classList.add("profile-image");
  img.setAttribute('src', user.picture);
  img.setAttribute('alt', "profile image");
  secondDiv.classList.add("text1");
  span.classList.add("settings-tray--right");
  i.classList.add("bi", "bi-person-plus");
  i.style = "color: black; float: right;";
  secondDiv.appendChild(h);
  firstDiv.appendChild(img);
  span.appendChild(i);
  firstDiv.appendChild(span);
  firstDiv.appendChild(h);
  document.getElementById("myUser").appendChild(firstDiv);
}

function addMsg(user, str, isMyUser, type) {
  let rowClass = document.createElement("div");
  let colClass = document.createElement("div");
  let chatClass = document.createElement("div");
  rowClass.classList.add("row", "no-gutters");
  if (isMyUser) {
    colClass.classList.add("col-md-3_r");
    chatClass.classList.add("chat-bubble", "chat-bubble--left");
  } else {
    colClass.classList.add("col-md-3", "offset-md-9");
    chatClass.classList.add("chat-bubble", "chat-bubble--right");
  }
  if (type == "message") {
    chatClass.innerText = str;
  }
  if (type == "image") {
    let image = document.createElement("img");
    image.setAttribute('width', "70");
    image.setAttribute('height', "70");
    image.setAttribute('src', str);
    chatClass.appendChild(image);
  }
  if (type == "video") {
    let video = document.createElement("video");
    let source = document.createElement("source");
    video.setAttribute('width', "170");
    video.setAttribute('height', "100");
    video.setAttribute('controls', '');
    source.setAttribute('src', str);
    video.appendChild(source);
    chatClass.appendChild(video);
  }
  if (type == "text") {
    let text = document.createElement("embed");
    text.setAttribute('src', str);
    chatClass.appendChild(text);
  }
  if (type == "record") {
    let rec = document.createElement("div");
    rec.appendChild(str);
    chatClass.appendChild(rec);
  }
  colClass.appendChild(chatClass);
  rowClass.appendChild(colClass);
  document.getElementById(user.username).appendChild(rowClass);
}



function setMessages(myUser, user) {
  for (let u of users) {
    if (document.getElementById(u.username).style.display !== "none") {
      document.getElementById(u.username).style.display = "none";
    }
  }
  document.getElementById(user.username).style.display = "block";
  if (user.firstClick) {
    addMsg(user, myUser.list[0], true, "message");
    addMsg(user, user.list[0], false, "message");
    user.firstClick = false;
  }
}

function setPages() {
  if (pages) {
    for (let user of users) {
      let userClass = document.createElement("div");
      userClass.id = user.username;
      userClass.style.display = "none";
      document.getElementById("messages").appendChild(userClass);
    }
    pages = false;
  }
}

function startTime() {
  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return hours + ":" + minutes;
}

function myPartner() {
  let user;
  for (let u of users) {
    if (document.getElementById(u.username).style.display !== "none") {
      user = u;
    }
  }
  return user;
}

function setTimeAndLastMsg(msg, type) {
  let user = myPartner();
  let t = user.username + "1";
  document.getElementById(t).innerHTML = startTime();
  let m = user.username + "2";
  if (type === "message") {
    if (msg.length > 28) {
      msg = (msg.match(/.{1,28}/g));
      msg = msg[0];
      msg = msg + "...";
    }
    document.getElementById(m).innerHTML = msg;
  }
  if (type === "image") {
    document.getElementById(m).innerHTML = "picture";
  }
  if (type === "video") {
    document.getElementById(m).innerHTML = "video";
  }
  if (type === "record") {
    document.getElementById(m).innerHTML = "record";
  }
  if (type === "text") {
    document.getElementById(m).innerHTML = "text";
  }

}

function displayUser(myUser, user) {
  let firstDiv = document.createElement("div");
  let img = document.createElement("img");
  let secondDiv = document.createElement("div");
  let h = document.createElement("h6");
  let p = document.createElement("p");
  p.innerText = user.list[0];  
  let span = document.createElement("span");
  // span.innerHTML = startTime(); // change
  span.innerHTML = getRandomTime();
  firstDiv.classList.add("friend-drawer", "friend-drawer--onhover");
  firstDiv.addEventListener('click', function () {
    let result = document.getElementsByClassName("friend-drawer no-gutters friend-drawer--grey");
    result[0].getElementsByTagName("h6")[0].innerText = user.nickname; //Name//
    result[0].getElementsByTagName("img")[0].src = user.picture; //Pic//
    setPages();
    setMessages(myUser, user);
  });
  img.setAttribute('src', user.picture);
  img.setAttribute('alt', "Friend photo");
  img.classList.add("profile-image");
  secondDiv.classList.add("text");
  h.innerText = user.nickname;
  p.classList.add("text-muted");
  p.id = user.username + "2";
  span.classList.add("time", "text-muted-small");
  span.id = user.username + "1";
  secondDiv.appendChild(h);
  secondDiv.appendChild(p);
  firstDiv.appendChild(img);
  firstDiv.appendChild(secondDiv);
  firstDiv.appendChild(span);
  document.getElementById("contacts").appendChild(firstDiv);
}

function displayContacts(user) {
  let i = 0;
  for (let u of users) {
    if (i == 5) {
      return;
    }
    if (u.username === user.username) {
      continue;
    }
    displayUser(user, u);
    i++;
  }
}

function recordUpload(audio) {
  let user = myPartner();
  // addMsg(user, audio, false, "record");
  addMsg(user, audio, true, "record");
  setTimeAndLastMsg(audio, "record");
}

let pictureUpload = function () {
  let picture = document.getElementById("picture-upload");
  let user = myPartner();
  if (picture.value != "") {
    addMsg(user, picture.files[0].name, true, "image");
    // addMsg(user, picture.files[0].name, false, "image");
    setTimeAndLastMsg(picture, "image");
  }
}

let videoUpload = function () {
  let video = document.getElementById("video-upload");
  let user = myPartner();
  if (video.value != "") {
    // addMsg(user, video.files[0].name, true, "video");
    addMsg(user, video.files[0].name, false, "video");
    setTimeAndLastMsg(video, "video");
  }
}

let textUpload = function () {
  let text = document.getElementById("txt-upload");
  let user = myPartner();
  if (text.value != "") {
    addMsg(user, text.files[0].name, true, "text");
    setTimeAndLastMsg(video, "text");
  }
}

function sendButton() {
  let user = myPartner();
  let msg = document.getElementById("myMsg").value;
  if (msg === '') {
    return;
  }
  addMsg(user, msg, true, "message");
  document.getElementById("myMsg").value = '';
  setTimeAndLastMsg(msg, "message");
}

// send msg with Enter //
var key = document.getElementById("myMsg");
key.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendButton();
  }
})

function addUser(user) {
  for (let u of users) {
    if (data[0] === u.username) {
      displayUser(u, user);
    }
  }
}

// delete //
for(let user of users){
  console.log(user);
}




//////////////////////////////////////////////////////////////
var userName = window.localStorage.getItem("0");
// console.log(userName);
// console.log("sgedgbes"); 

var nickName = window.localStorage.getItem("1");
// console.log(nickName);

var passWord = window.localStorage.getItem("2");
// console.log(passWord);

var picture = window.localStorage.getItem("3");
// console.log(picture);

var signUp = window.localStorage.getItem("4");
// console.log(signUp);

let data = [userName, nickName, passWord, picture];


for (let u of users) {
  if (data[0] === u.username) {
    myProfile(u);
    displayContacts(u);
  }
}
