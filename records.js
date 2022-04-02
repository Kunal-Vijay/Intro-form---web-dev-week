
//calling show users to show previous users stored in local storage 
showUsers();

function showUsers() {
    let users = localStorage.getItem("MyUserList");
    if (users == null) {
        usersObj = [];
    } else {
        usersObj = JSON.parse(users);
    }
    
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(usersObj, '\t', 2);
}