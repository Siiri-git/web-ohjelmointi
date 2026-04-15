window.onload = function () {
    console.log("Chat-sivu avattu")
}

function message(e) {
    e.preventDefault();
    
    let birthday = e.target.form.bday.value;
    let email = e.target.form.email.value;  
    let type = e.target.form.type.value;
    let permission = e.target.form.permission.value;
    let msg = e.target.form.msg.value;
    console.log("birthday: " + birthday + "\n" + 
                "email: " + email + "\n" +
                "msg type: " + type + "\n" + 
                "permission of usage: " + permission + "\n" + 
                "message: " + msg);

    const dialog = document.getElementById("chat")
    dialog.close();
}