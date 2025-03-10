const uName = document.getElementById('username');
const email = document.getElementById('email');
const pass = document.getElementById('password');
const errOne = document.getElementById('error1');
const errTwo = document.getElementById('error2');
const errThree = document.getElementById('error3');

function valLogin() {
    if (uName.value == '') {
        errOne.innerHTML = 'username field is empty';
    } else if (email.value == '') {
        errTwo.innerHTML = 'email field is empty';
    } else if (pass.value.length < 6) {
        errThree.innerHTML = 'password should be more than 6 letters';
    } else {
        errOne.innerHTML = '';
        errTwo.innerHTML = '';
        errThree.innerHTML = '';
    }
    
};

const slash = document.getElementById('slash');
const openEyes = document.getElementById('openeyes');
const slashed = document.querySelector('.slashed');
const eyeslash = document.querySelector('.eyeslash')

function openEye() {
    pass.type = 'text';
    slashed.style.display = 'block';
    eyeslash.style.display = 'none';
}

function closeEye() {
    pass.type = 'password';
    slashed.style.display = 'none';
    eyeslash.style.display = 'block';
}