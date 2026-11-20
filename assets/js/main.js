// Shared scripts for the KCC student website project.
document.addEventListener('DOMContentLoaded', () => {
    const year = document.querySelector('[data-year]');
    if (year) year.textContent = new Date().getFullYear();

    // Mark the current page in the navigation for accessibility and visual feedback.
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar .nav-link').forEach((link) => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });

    // This is only a demo contact form; it does not send or save messages.
    const demoForm = document.getElementById('demoContactForm');
    if (demoForm) {
        demoForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Demo form only. Your message was not sent or saved. Please use the official KCC contact channels.');
            demoForm.reset();
        });
    }
});
