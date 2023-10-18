function validate() {
    var usname = document.getElementById("user_name").value;
    if (usname.length == 0) {
        alert("Please enter Username.");
        return false;
    }
    var pword = document.getElementById("pass_word").value;
    if (pword.length == 0) {
        alert("Please enter Password.");
        return false;
    }
    var pword2 = document.getElementById("cpass_word").value;
    if (pword.length == 0) {
        alert("Please enter Password.");
        return false;
    }
    if(pword2!=pword){
        alert("Please enter same Password for both field.");
        return false;
    }
    

}