const logo = document.querySelector("#logo");
    logo.addEventListener("click", function() {
    window.location.href = "https://github.com/MasterZen7";
});

const form = document.querySelector('form');
const passwordMatch = document.querySelector('#hidden');
form.addEventListener('submit', checkPassword);

function checkPassword(event) {
    event.preventDefault();
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirmPassword').value;

    if (password !== confirmPassword) {
        passwordMatch.innerHTML = 'Passwords do not match'
        passwordMatch.style.display = 'flex';
        return false;
    }
    form.submit();
}