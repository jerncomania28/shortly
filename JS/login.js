const email = document.querySelector('#email');
const password = document.querySelector('#password');
const signIn = document.querySelector('#signIn');
const formContainer = document.querySelector('.form-container');


signIn.addEventListener('click', checkInput);


const paragraph = document.createElement('p');

function checkInput(event) {

    if (email.value === "" || password.value === "") {

        paragraph.innerText = "make sure the fields are not empty";

        paragraph.classList.add('error'); formContainer.appendChild(paragraph);

        event.preventDefault();

    }
}
formContainer.removeChild(paragraph);

