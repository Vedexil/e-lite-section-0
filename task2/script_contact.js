function validate() {
    var a = document.getElementById("name").value;
    var b = document.getElementById("email").value;
    var c = document.getElementById("message").value;

    var isValid = true

    if (a == "" || b == "" || c == "") {
        alert("Filling all fields is mandatory")
        isValid = false;
    }

    else if (!/^[a-zA-Z\s]+$/.test(a)) {
        alert("Name should contain only alphabets and spaces.")
        isValid = false;
    }

    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(b)) {
        alert("Invalid email address. Please enter a valid email address.")
        isValid = false;
    }

    if(isValid) {
        var userInputString = "Name: " + a + "\nGrade: " + b + "\nEmail: " + c + "\nDate of Birth: " + d + "\nAbout Yourself: " + e + "\nAchievements: " + f;
        alert(userInputString);
        return true;
        
    }
    else {
        return false;
    }
}
