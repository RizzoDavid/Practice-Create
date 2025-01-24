// This file contains the JavaScript code for the website. It handles interactivity and dynamic content on the web page.

document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = 'Welcome to My Website!';
    
    const button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});