const error = document.querySelector('.error-text');
const password1 = document.querySelector('#password');
const password2 = document.querySelector('#confirm_password');

document.addEventListener('keyup', run);

function run() {
    let x = password1.value;
    let y = password2.value;
    if (x === y) {
        error.setAttribute('hidden', 'true');
    } else {
        error.removeAttribute('hidden');
    }
}