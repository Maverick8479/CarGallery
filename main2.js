const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    document.body.classList.toggle('no-scroll'); // Prevent scrolling when the menu is open
});

// Close mobile menu when a link is clicked
const navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

// Toggle search box
const searchIcon = document.getElementById('search-icon');
const searchBox = document.querySelector('.search-box');

searchIcon.addEventListener('click', () => {
    searchBox.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

// Close search box when clicking outside
document.addEventListener('click', event => {
    if (!searchBox.contains(event.target) && event.target !== searchIcon) {
        searchBox.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});

// Smooth scrolling for internal links
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const message = document.getElementById('message');

loginForm.addEventListener('login', function(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

        // In a real-world scenario, you'd perform authentication here.
        // For demonstration purposes, let's use some hardcoded values.
    if (username === 'user' && password === 'password') {
        message.textContent = 'Login successful!';
    } else {
        message.textContent = 'Login failed. Please check your credentials.';
    }
});
})