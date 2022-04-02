function func() {
    var type = document.getElementsByName('branch');
    console.log(type);
}

let users = [];
const addUsers = (ev) => {
    ev.preventDefault();  //to stop the form submitting
    var sel = document.getElementsByName('branch');
    if (sel[0].checked) {
        var brc = "CSE";
    } else if (sel[1].checked) {
        var brc = "IT";
    } else if (sel[2].checked) {
        var brc = "ECE";
    }

    let data = {
        id: Date.now(),
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        branch: brc,
        about: document.getElementById('about').value
    }
    users.push(data);
    document.forms[0].reset(); // to clear the form for the next entries

    //saving to localStorage
    console.log(users);
    localStorage.setItem('MyUserList', JSON.stringify(users));
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addUsers);
});