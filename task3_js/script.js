function validate() {
    var name = document.getElementById('name');;
    var email = document.getElementById('email');
    var grade = document.getElementById('grade');
    var date = document.getElementById('dob');
    var about = document.getElementById('yourself');
    var achievement = document.getElementById('achieve');

    if(name.value == "" || email.value == "" || grade.value == "" || date.value == "" || about.value == "" || achievement.value == "");
        {
            alert("Please fill out all the fields.")
            return false;
        }
        
}

function isInputLetter (evt) {
    var ch = String.fromCharCode(evt.which);

    if (/^[A-Za-z_ ]*$/.test(ch)) {
        alert("Name can only contain letters and spaces!")
    }
}