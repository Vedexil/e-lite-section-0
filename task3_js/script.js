
function validate() 
{   
    var a = document.getElementById("name").value
    var b = document.getElementById("grade").value
    var c = document.getElementById("email").value
    var d = document.getElementById("dob").value
    var e = document.getElementById("yourself").value
    var f = document.getElementById("achieve").value    

    var isValid = true;
    
    if (a == "" || b == "" || c == "" || d == "" || e == "" || f == "") {
        alert("Kindly fill all the fields.")
        isValid = false
    }

     else if (!/^[a-zA-Z\s]+$/.test(a)) {
        alert("Name should contain only alphabets and spaces.")
        isValid = false;
    }
    
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(c)) {
        alert("Invalid email address. Please enter a valid email address.")
        isValid = false;
    }

    var dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/
    if (!dateRegex.test(d)) {
        alert("Invalid date of birth. Please enter a valid date of birth.")
        isValid = false;
    }

    var radios = document.getElementsByName("like"); 
    var radioButtonSelected = false;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radioButtonSelected = true;
            break;
        }
    }
    if (!radioButtonSelected) {
        alert("Please let us know if you want to receive notifications!")
        isValid = false;
    }


    if (isValid) {
        var userInputString = "Name: " + a + "\nGrade: " + b + "\nEmail: " + c + "\nDate of Birth: " + d + "\nAbout Yourself: " + e + "\nAchievements: " + f + "\nWPress OK to submit.";
        alert(userInputString);
        return true;
    } else {
        return false;
    }
}

