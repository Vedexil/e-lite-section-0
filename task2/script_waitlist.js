function validate() {
    var c = document.getElementById("email")
    var radios = document.getElementById("updates")

    var isValid = true;

    if (c == "") {
        alert("Please enter an email address.");
        isValid = false;
    } else {
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(c)) {
            alert("Invalid email address. Please enter a valid email.");
            isValid = false;
        }
    }

    var radioButtonSelected = false;
    for(var i =0; i<radios.length; i++) {
        if (radios[i].checked) {
            radioButtonSelected = true;
            break;
        }
    }

    if (!radioButtonSelected) {
        alert("Please let us know if you want to receive notifications!")
        isValid = false;
    }
    
    if(isValid) {
        var userInputString = "Email" + c
        alert(userInputString);
        return true;
    }
    else {
        return false;
    }

}