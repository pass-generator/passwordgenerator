function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const strengthMessage = document.getElementById('strengthMessage');

    if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[@$!%*?&#]/.test(password)) {
        strengthMessage.style.color = 'red';
        strengthMessage.textContent = 'Your password is weak!';
    } else {
        strengthMessage.style.color = 'green';
        strengthMessage.textContent = 'Your password is strong!';
    }
}

function generatePassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$!%*?&#';
    let password = '';
    for (let i = 0; i < 12; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('generatedPassword').value = password;
}
