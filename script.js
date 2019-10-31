//Formulär
var myForm = document.forms.myForm;
var message = document.getElementById("message");

myForm.onsubmit = function() {
  if(myForm.name.value == ""){
    message.innerHTML = "Skriv in en giltig e-postadress";
    return false;
  } else { 
    message.innerHTML = "";
    return true;
  }
};

//Klocka
/* function currentTime() {
  let date = new Date(); //creating object of Date class
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + ":" + min + ":" + sec; //adding time to the div
  let t = setTimeout(function () { currentTime() }, 1000); //setting timer
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

currentTime(); //calling currentTime() function to initiate the process */