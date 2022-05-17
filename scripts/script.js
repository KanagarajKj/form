'use strict';

const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const mobileNumber = document.getElementById('mobile');
const password = document .getElementById('password');
const passwordTwo = document.getElementById('confirm-password');
const messageBox = document.getElementById('message');
const remainingChar = document.querySelector('small');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkRequired(arrElement);
  checkEmail(email);
  checkNum(mobileNumber);
  checkPassword(password,passwordTwo);
  checkLength(password,12,5);
  checkLength(passwordTwo,12,5);
});


let arrElement = [userName,email,mobile,password,passwordTwo];

let checkRequired = function(arrElement){
        arrElement.forEach(input => {
        if(input.value.trim() === ''){
            showError(input,`${input.name} is must enter`);
        }else{
            showSucess(input,'sucess');
        }
    });
}

// Show Error Message
const showError =  function(input,message){
    let formControl = input.parentElement;
    formControl.classList = 'form_control error';
    let span = formControl.querySelector('span');
    span.innerText = message;
}

// Show Sucess Message
const showSucess = function(input,message){
    let formControl = input.parentElement;
    formControl.classList = 'form_control sucess';
    let span = formControl.querySelector('span');
    span.innerText = message;
}

// Check Email Id
const checkEmail = function(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(input.value.match(re)){
        showSucess(input,'Sucess');
    } else {
        showError(input,'Enter valid Email Id');
    }
}

// Check Mobile Number
const checkNum = function(input){
    const regexExp = /^[6-9]\d{9}$/gi;
    if (input.value.match(regexExp)) {
      showSucess(input, 'Sucess');
    } else {
      showError(input, 'Enter Valid Mobile Number');
    }
}

// CheckPassword Matching
const checkPassword = function(input1,input2){
    if(input1.value.trim() !== '' && input2.value.trim() !== ''){
        if(input1.value.trim() !== input2.value.trim()){
            showError(input2,'password Not Match');
        }else{
            showSucess(input1,'Sucess');
            showSucess(input2,'Sucess');
        }
    }
}

// CheckLength of Password
const checkLength = function(input,max,min){
    if(input.value.trim().length > max){
        showError(input, `${input.name} should lessthan ${max}`)
    }else if(input.value.trim().length < min){
        showError(input, `${input.name} must ${min} character`);
    } 
}

// TextArea
const maxChar = 300;
messageBox.addEventListener('input',() => {
    const remaining = maxChar - messageBox.value.length;
    remainingChar.textContent = `${remaining} characters remaining`;
    let color = remaining < maxChar * 0.1 ? 'red' : null;
    remainingChar.style.color = color;
});






