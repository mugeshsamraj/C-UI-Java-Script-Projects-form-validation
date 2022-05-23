"use strict"

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const phonenumber = document.getElementById("phone-number");

form.addeventlistener('submit',e => {
  e.preventDefault();
  checkInput();
});

function checkInput(){
  const usernameValue = username.Value.trim();
  const emailValue = email.Value.trim();
  const passwordValue = password.Value.trim();
  const password2Value = password2.Value.trim();
  const phonenumberValue = phonenumber.Value.trim();


  if (username === "")
    {
      setError(username,"username can't be blank");
    }
  else{
    setSuccess(username);
  }

  if (email === "")
    {
      setError(email,"email can't be blank");
    }
  else if (!isEmail(emailValue))
  {
    setError(email,'Not valid Email');
  }
  else{
    setSuccess(email);
  }

  if (password === "")
    {
      setError(password,"password can't be blank");
    }
  else{
    setSuccess(password);
  }

  if (password2 === "")
    {
      setError(password2,"password can't be blank");
    }
  else if(passwordValue !== password2Value){
    setError("password doesn't match");
  }
  else{
    setSuccess(password2);
  }

}
function setError(input,message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error' ;
  small.innerText = message;
}
function setSuccess(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success' ;
}

function isEmail(email){
  return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|
  (".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|
  (([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}

/*const isEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
*/