

let MainImg = document.getElementById("MainImg");
let smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    MainImg.src = smallimg[3].src;
}

document.getElementsByTagName("h1")[0].style.fontSize = "6vw";




function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }


 /* quanity change */

 function pr() {
    document.getElementById("result").innerHTML = document.getElementById('fname').value;
    document.getElementById("result4").innerHTML = document.getElementById('fname').value * 12000;
 }




 function pr1() {
    document.getElementById("result1").innerHTML = document.getElementById('fname').value + " " + document.getElementById('mname').value + " " + document.getElementById('lname').value;
    alert("The Form has been Submitted.");
}

function pr2() {
    document.getElementById("result2").innerHTML = document.getElementById('fname').value ;
    document.getElementById("result3").innerHTML = document.getElementById('fname').value * 12000;
 }



 function myFunction1() {
    return alert("Email Recived");
  }



    document.getElementById("myButton") = function () {
        location.href = src="blank.html";
    };

    