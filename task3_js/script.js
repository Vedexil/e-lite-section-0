var a = document.getElementById("name")
var b = document.getElementById("grade")
var c = document.getElementById("email")
var d = document.getElementById("dob")
var e = document.getElementById("yourself")
var f = document.getElementById("achieve")


function info() 
{
    if (a == "" || b == "" || c == "" || d == "" || e == "" || f == "") {
        alert("Kindly fill all the fields.")
        return false
    }
    else {
        return true
    }
}

