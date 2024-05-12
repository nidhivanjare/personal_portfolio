// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle navbar background color on scroll
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 20) {
        navbar.style.backgroundColor = '#4A148C'; // Change to a darker shade of purple on scroll
    } else {
        navbar.style.backgroundColor = '#6A0DAD'; // Restore original color when scrolled to top
    }
});
