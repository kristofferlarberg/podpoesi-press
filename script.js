//Formulär
var myForm = document.forms.myForm;
var message = document.getElementById("message");

myForm.onsubmit = function() {
  
  if(myForm.name.value == ""){
    message.innerHTML = "Skriv in en giltig e-postadress";
    return false;
  } else { 
    message.innerHTML = "Tack för ditt intresse";
    myForm.name.value = ""
    return false;
  }
};