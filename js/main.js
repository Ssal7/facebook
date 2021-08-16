function validation() {
    var text = document.getElementById("text").value;
    var Pass = document.getElementById("pass").value;


    if (text == "" || pass < 5 || pass > 20) {
        document.getElementById("text").style.borderColor = "red";
        document.getElementById("pass").style.borderColor = "red";
    }
    // } else if (pass < 5 || isNaN("pass")) {
    //     document.getElementById("pass").style.borderColor = "red";
    // } 
    else {
        document.getElementById("text").style.borderColor = "green";
        document.getElementById("pass").style.borderColor = "green";
    }


}