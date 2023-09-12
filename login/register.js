document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('registerUsername').value;
    let password = document.getElementById('registerPassword').value;

    if (registerUser(username, password)) {
        alert('Registration successful! You can now log in.');
        window.location.href = 'login.html'; // Redirect to login page
    } else {
        alert('Username already exists. Please choose a different username.');
    }
});
