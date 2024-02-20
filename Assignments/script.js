function validateForm(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();



    let isValid = true;

    // Username validation
    if (username === '') {
        document.getElementById('usernameError').textContent = 'Username is required.';
        isValid = false;
    }

    // Email validation
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        isValid = false;
    }

    // Password validation
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // Confirm password validation
    if (confirmPassword === '') {
        document.getElementById('confirmPasswordError').textContent = 'Please confirm your password.';
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    // If all fields are valid, submit the form
    if (isValid) {
        document.getElementById('registrationForm').submit();
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
