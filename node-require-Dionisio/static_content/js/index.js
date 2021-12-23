document.addEventListener("DOMContentLoaded", function() {

   var request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.response);
        }
    }


    request.open("POST", "http://127.0.0.1:6500/getsellsplace", true);
    //request.setRequestHeader("Access-Control-Allow-Origin", "*");
    request.send();

});
