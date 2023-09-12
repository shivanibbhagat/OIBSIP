document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;
    
    let user = loginUser(username, password);
    
    if (user) {
        alert('Login successful!');
        window.location.href = 'secured.html'; // Redirect to secured page
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
