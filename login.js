
const map1 = new Map();
map1.set('a', '12');
function signIn() {
    let username = document.getElementById("uname").value;
    let password = document.getElementById("psw").value;
    if (username === "" || password === "") {
        alert("Invalid input.");
        return;
    }
    if (map1.has(username)) {
        if (map1.get(username) === password) {
            alert("connected to login.html")
        }
    } else
        alert("Not connected to login.html")
}