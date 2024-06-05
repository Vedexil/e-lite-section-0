function validate() {
    var name = document.getElementById("namebox");
    var email = document.getElementById("emailbox");
    var message = document.getElementById("messagebox"); 

    if (name.value == "" || email.value == "" || message.value == "")
        {
            alert("Please fill out all the fields.");
            return false;
        }
        else {
            showAlert(name, email, message);
        }
}

function allLetter(input) {
    var letters = /^[A-Za-z_ ]*$/;

    if (input.value.match(letters))
        {
            return true
        }
        else if (input.value == "") {
            return true
        }
        else
        {
            alert("Please input alphabet characters only in the name field. ");
            return false;
        }
}

function allMail(email) {
    var character = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.value.match(character))
        {
            return true;
        }
        else if (input.value == "") {
            return true
        }

        else 
        {
            alert("Please enter a valid email address.")
            return false;
        }


}

function showAlert(name, email, message) {
    alert("You have submitted the following information:\nName: " + namename + "\nEmail: " + email + "\nMessage: " + message)
}

