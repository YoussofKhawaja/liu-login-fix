// Remove existing body and head
document.body.remove();
document.head.remove();

// Create new head and body elements
var head = document.createElement('head');
document.documentElement.appendChild(head);

var body = document.createElement('body');
document.documentElement.appendChild(body);

// Add Bootstrap CSS
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
head.appendChild(link);

// Add Bootstrap JS
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
script.integrity = 'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz';
script.crossOrigin = 'anonymous';
script.type = 'text/javascript';
head.appendChild(script);

// Create container div
var div = document.createElement('div');
div.className = 'container mt-5';
body.appendChild(div);

var header = document.createElement('h1');
header.innerHTML = 'LIU Login Form';
header.className = 'mb-4';
div.appendChild(header);

// Create form element
var form = document.createElement('form');
form.id = 'myForm';
form.method = 'post';
form.action = 'https://syslb.liu.edu.lb/login.php';
div.appendChild(form);

// Hidden input for httpRefer
var hiddenInput = document.createElement('input');
hiddenInput.type = 'hidden';
hiddenInput.name = 'httpRefer';
hiddenInput.value = 'https://liu.edu.lb/';
form.appendChild(hiddenInput);

// Username div
var emailDiv = document.createElement('div');
emailDiv.className = 'mb-3';
form.appendChild(emailDiv);

var emailLabel = document.createElement('label');
emailLabel.setAttribute('for', 'InputUsername');
emailLabel.className = 'form-label';
emailLabel.innerHTML = 'Username';
emailDiv.appendChild(emailLabel);

var emailInput = document.createElement('input');
emailInput.type = 'text';
emailInput.className = 'form-control';
emailInput.id = 'InputUsername';
emailInput.name = 'USER';
emailInput.setAttribute('aria-describedby', 'usernameHelp');
emailInput.required = true;
emailDiv.appendChild(emailInput);

var emailHelp = document.createElement('div');
emailHelp.id = 'emailHelp';
emailHelp.className = 'form-text';
emailHelp.innerHTML = "We'll never share your username with anyone else.";
emailDiv.appendChild(emailHelp);

// Password div
var passwordDiv = document.createElement('div');
passwordDiv.className = 'mb-3';
form.appendChild(passwordDiv);

var passwordLabel = document.createElement('label');
passwordLabel.setAttribute('for', 'InputPassword');
passwordLabel.className = 'form-label';
passwordLabel.innerHTML = 'Password';
passwordDiv.appendChild(passwordLabel);

var passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.className = 'form-control';
passwordInput.id = 'InputPassword';
passwordInput.name = 'PASS';
passwordInput.required = true;
passwordDiv.appendChild(passwordInput);

// Checkbox div
var checkboxDiv = document.createElement('div');
checkboxDiv.className = 'mb-3 form-check';
form.appendChild(checkboxDiv);

var checkboxInput = document.createElement('input');
checkboxInput.type = 'checkbox';
checkboxInput.className = 'form-check-input';
checkboxInput.id = 'RememberCheck';
checkboxDiv.appendChild(checkboxInput);

var checkboxLabel = document.createElement('label');
checkboxLabel.className = 'form-check-label';
checkboxLabel.setAttribute('for', 'RememberCheck');
checkboxLabel.innerHTML = 'Remember me';
checkboxDiv.appendChild(checkboxLabel);

// Submit button
var submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.className = 'btn btn-primary';
submitButton.innerHTML = 'Login';
form.appendChild(submitButton);

// Forgot Password link
var forgotPasswordLink = document.createElement('a');
forgotPasswordLink.href = 'https://syslb.liu.edu.lb/login/resetStdPassword.php';
forgotPasswordLink.className = 'd-block mt-3';
forgotPasswordLink.innerHTML = 'Forgot Password?';
div.appendChild(forgotPasswordLink);

window.onload = function () {
    if (localStorage.getItem('rememberMe') === 'true') {
        emailInput.value = localStorage.getItem('email');
        passwordInput.value = localStorage.getItem('password');
        checkboxInput.checked = true;
    }
};

form.onsubmit = function (event) {
    event.preventDefault();
    if (checkboxInput.checked) {
        localStorage.setItem('email', emailInput.value);
        localStorage.setItem('password', passwordInput.value);
        localStorage.setItem('rememberMe', 'true');
    } else {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.setItem('rememberMe', 'false');
    }
    fcheckLogin();
};

// Function to handle login
function fcheckLogin() {
    console.log('Logging in with', emailInput.value, passwordInput.value);

    form.submit();
};