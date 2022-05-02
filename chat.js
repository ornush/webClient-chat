
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

let usersMsgs = [["Hi"], ["Hello"], ["How are you?"], ["hey"], ["zzzz"], ["tttt"], ["aaaa"]];
let video = "video.mp4";
let pic = "icon-error.jpg";
let txt = "test.txt";
let rec = "abc.mp3"
let contactList = [];
let allTheOthers = [];
let u = 0;

const users = [
  { username: 'Brian1', nickname: 'Brian', password: 'a1234', picture: "man1.JPG", list: usersMsgs[0], firstClick: true },
  { username: 'Trevor1', nickname: 'Trevor', password: 'b1234', picture: "man2.JPG", list: usersMsgs[1], firstClick: true },
  { username: 'Jonathan1', nickname: 'Jonathan', password: 'c1234', picture: "man3.JPG", list: usersMsgs[2], firstClick: true },
  { username: 'Joshua1', nickname: 'Joshua', password: 'd1234', picture: "man4.JPG", list: usersMsgs[3], firstClick: true },
  { username: 'Ruth1', nickname: 'Ruth', password: 'e1234', picture: "woman1.JPG", list: usersMsgs[4], firstClick: true },
  { username: 'Anne1', nickname: 'Anne', password: 'f1234', picture: "woman2.JPG", list: usersMsgs[5], firstClick: true },
  { username: 'Abigail1', nickname: 'Abigail', password: 'g1234', picture: "woman3.JPG", list: usersMsgs[6], firstClick: true }];



var pages = true;
var uploadPicture;
var uploadVideo;
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
  let a = document.createElement("a");
  a.setAttribute("href", "#my_modal");
  a.setAttribute("data-toggle", "modal");
  a.setAttribute("data-id", "1");
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
  a.appendChild(i);
  span.appendChild(a);
  // span.appendChild(i);
  firstDiv.appendChild(span);
  firstDiv.appendChild(h);
  document.getElementById("myUser").appendChild(firstDiv);
}

function addMsg(user, str, isMyUser, type, upRec) {
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
    if (upRec) {
      let temp = document.createElement("audio");
      temp.setAttribute("preload", "auto");
      temp.setAttribute("src", str);
      temp.setAttribute("controls", "1");
      chatClass.appendChild(temp);
    } else {
      let rec = document.createElement("div");
      rec.appendChild(str);
      chatClass.appendChild(rec);
    }
  }
  colClass.appendChild(chatClass);
  rowClass.appendChild(colClass);
  document.getElementById(user.username).appendChild(rowClass);
}



function setMessages(myUser, user, oldContact) {
  document.getElementById("userPage").style.display = "block";
  document.getElementById("logIn").style.display = "none";
  document.getElementById("signup").style.display = "none";
  let usernameColor;

  for (let u of users) {
    if (document.getElementById(u.username).style.display !== "none") {
      document.getElementById(u.username).style.display = "none";
      usernameColor = u.username + "3";
      document.getElementById(usernameColor).style.backgroundColor = ""; //delete
    }
  }
  document.getElementById(user.username).style.display = "block";
  usernameColor = user.username + "3";
  document.getElementById(usernameColor).style.backgroundColor = "#f8f9fa"; //delete
  if (user.firstClick) {
    if (oldContact) {
      if (u == 0) {
        addMsg(user, myUser.list[0], true, "message");
        addMsg(user, pic, false, "image");
        addMsg(user, txt, true, "text");
        addMsg(user, video, false, "video");
        addMsg(user, user.list[0], false, "message");
      }
      if (u == 1) {
        addMsg(user, myUser.list[0], true, "message");
        addMsg(user, pic, true, "image");
        addMsg(user, txt, false, "text");
        addMsg(user, video, true, "video");
        addMsg(user, user.list[0], false, "message");
      }
      if (u == 2) {
        addMsg(user, myUser.list[0], true, "message");
        addMsg(user, pic, false, "image");
        addMsg(user, video, true, "video");
        addMsg(user, rec, true, "record", true);
        addMsg(user, user.list[0], false, "message");
      }
      if (u == 3) {
        addMsg(user, myUser.list[0], true, "message");
        addMsg(user, pic, true, "image");
        addMsg(user, user.list[0], false, "message");
      }
      if (u == 4) {
        addMsg(user, myUser.list[0], true, "message");
        addMsg(user, video, false, "video");
        addMsg(user, rec, true, "record", true);
        addMsg(user, txt, false, "text");
        addMsg(user, user.list[0], false, "message");
      }
      u = u + 1;
    }
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

function displayUser(myUser, user, oldContact) {
  let firstDiv = document.createElement("div");
  let img = document.createElement("img");
  let secondDiv = document.createElement("div");
  let h = document.createElement("h6");
  let p = document.createElement("p");
  if (oldContact) {
    p.innerText = user.list[0];
  }
  let span = document.createElement("span");
  // span.innerHTML = startTime(); // change
  span.innerHTML = getRandomTime();
  firstDiv.classList.add("friend-drawer", "friend-drawer--onhover");
  firstDiv.id = user.username + "3"; //delete
  firstDiv.addEventListener('click', function () {
    let result = document.getElementsByClassName("friend-drawer no-gutters friend-drawer--grey");
    result[0].getElementsByTagName("h6")[0].innerText = user.nickname; //Name//
    result[0].getElementsByTagName("img")[0].src = user.picture; //Pic//
    setPages();
    setMessages(myUser, user, oldContact);
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

function isExists(users, user) {
  for (let u of users) {
    if (u.username === user.username) {
      return true;
    }
  }
  return false;
}

function setAllTheOthers(u) {
  for (let user of users) {
    if (u.username === user.username) {
      continue;
    }
    if (!(isExists(contactList, user))) {
      allTheOthers.push(user);
    }
  }
}

function displayContacts(user) {
  let i = 0;
  for (let u of users) {
    if (i == 5) {
      setAllTheOthers(user);
      return;
    }
    if (u.username === user.username) {
      continue;
    }
    displayUser(user, u, true);
    contactList.push(u);
    i++;
  }
}

function recordUpload(audio) {
  let user = myPartner();
  console.log(audio);
  addMsg(user, audio, true, "record");
  setTimeAndLastMsg(audio, "record");
}

document.querySelector("#picture-upload").addEventListener("change", function () {
  let user = myPartner();
  let picture = document.getElementById("picture-upload");
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    addMsg(user, reader.result, true, "image");
    setTimeAndLastMsg(picture, "image");
  })
  reader.readAsDataURL(this.files[0]);
});

document.querySelector("#video-upload").addEventListener("change", function () {
  let user = myPartner();
  let video = document.getElementById("video-upload");
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    addMsg(user, reader.result, true, "video");

    setTimeAndLastMsg(video, "video");
  })
  reader.readAsDataURL(this.files[0]);
});

document.querySelector("#txt-upload").addEventListener("change", function () {
  let user = myPartner();
  let text = document.getElementById("txt-upload");
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    addMsg(user, reader.result, true, "text");
    setTimeAndLastMsg(text, "text");
  })
  reader.readAsDataURL(this.files[0]);
});

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


function addContact() {
  let txt = document.getElementById("txt").value;
  if (txt != '') {
    document.getElementById("txt").value = '';
    for (let user of allTheOthers) {
      if (txt === user.username) {
        displayUser(myUser(), user, false);
        allTheOthers = allTheOthers.filter(function (u) {
          return u.username != txt;
        })
        contactList.push(user);
      }
    }
  }
}

function welcome(name) {
  let h = document.createElement("h1");
  h.innerText = "Welcome " + name;
  document.getElementById("signup").appendChild(h);
}

function welcomeBack(name) {
  let h = document.createElement("h1");
  h.innerText = "Welcome Back " + name;
  document.getElementById("logIn").appendChild(h);

}




//////////////////////////////////////////////////////////

var userName = window.localStorage.getItem("0");
// console.log(userName);
// console.log("sgedgbes");

var nickName = window.localStorage.getItem("1");
// console.log(nickName);

var passWord = window.localStorage.getItem("2");
// console.log("----"+passWord);

var conf = window.localStorage.getItem("3");
// console.log(conf);

// var picture = window.localStorage.getItem("4");  
// console.log("__picturwe->>"+picture);

// let pic= document.getElementById("log");
// let pic3 = document.createElement("img");
// pic3.src=picture;
// pic3.innerText = pic3.src;
// console.log("__pic3 srccc->>"+pic3.src);
// pic.appendChild(pic3);
var picture = window.localStorage.getItem("6");


var signUp = window.localStorage.getItem("5");
// console.log("signnnnnn"+signUp);

let data = [userName, nickName, passWord, picture];

function newUser() {
  let user = { username: userName, nickname: nickName, password: passWord, picture: picture };
  return user;
}

function myUser() {
  for (let u of users) {
    if (data[0] === u.username) {
      return u;
    }
  }
}

if (passWord == "login") {// we are in login
  document.getElementById("logIn").style.display = "block";
  myProfile(myUser());
  displayContacts(myUser());
  welcomeBack(myUser().nickname);
} else {
  // we are in signup
  document.getElementById("signup").style.display = "block";
  for (let u of users) {
    allTheOthers.push(u);
  }
  myProfile(newUser());
  welcome(newUser().nickname);
}

