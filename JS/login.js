const email = document.querySelector('#email');
const password = document.querySelector('#password');
const signIn = document.querySelector('#signIn');
const formContainer = document.querySelector('.form-container');



let users = [
    {
        name: "Bathelomew",
        email: "bathelomew345@gmail.com",
        country: "Nigeria",
        phone: 09076908330,
        password: "emmanuel"
    },
    {
        name: "Valero",
        email: "valero35@gmail.com",
        country: "Nigeria",
        phone: 08034673456,
        password: "valero"
    },
    {
        name: "Matthew",
        email: "mattt345@gmail.com",
        country: "Nigeria",
        phone: "07078274234",
        password: "math"
    }
];


let mail = users.map(item => item.email);

let pass = users.map(item => item.password);



signIn.addEventListener('click', checkInput);


const paragraph = document.createElement('p');

function checkInput(event) {

    if (!mail.includes(email.value) && !pass.includes(password.value)) {

        paragraph.innerText = "make sure the fields are not empty";

        paragraph.classList.add('error'); 
        formContainer.appendChild(paragraph);

        event.preventDefault();

    }
    formContainer.removeChild(paragraph);
}


