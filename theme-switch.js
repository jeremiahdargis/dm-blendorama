// theme-switch.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // 1. Check for saved preference on page load

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
    }

    // 2. Add the click listener

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        // 3. Save the choice
        
        const isDark = body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});