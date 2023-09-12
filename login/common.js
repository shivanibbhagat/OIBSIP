// This file contains shared code between pages

// Function to get users from localStorage or initialize an empty array
function getUsersFromLocalStorage() {
    const usersJSON = localStorage.getItem('users');
    return usersJSON ? JSON.parse(usersJSON) : [];
}

// Function to save users to localStorage
function saveUsersToLocalStorage(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Initialize the users array from localStorage
let users = getUsersFromLocalStorage();

function registerUser(username, password) {
    if (users.some(user => user.username === username)) {
        return false; // Username already exists
    }

    users.push({ username, password });
    saveUsersToLocalStorage(users); // Save to localStorage
    return true; // Registration successful
}

function loginUser(username, password) {
    return users.find(user => user.username === username && user.password === password);
}
