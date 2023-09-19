const form = document.querySelector(".contact-form");
const nameContact = document.querySelector("#contact-name");
const nameError = document.querySelector("#NameError");
const message = document.querySelector("#contact-explanation");
const messageError = document.querySelector("#messageError");
const email = document.querySelector("#contact-mail");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#contact-subject");
const subjectError = document.querySelector("#subjectError");
const submit=document.querySelector(".submit")


function validateForm(event) {
    event.preventDefault();

    if (checkLength(nameContact.value, 5) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (checkLength(message.value, 25) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }


    if (checkLength(subject.value, 15) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    

    console.log("hello");
};



submit.addEventListener("click", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}