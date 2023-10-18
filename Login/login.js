function validate(){
    var usname=document.getElementById("user_name").value;
    if(usname.length==0){
        alert("Please enter Username.");
        return false;
    }
    var pword = document.getElementById("pass_word").value;
    if (pword.length==0) {
        alert("Please enter Password.");
        return false;
    }
    var x = document.getElementById("check").required;
}