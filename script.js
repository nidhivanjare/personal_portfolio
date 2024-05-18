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

const sidebarItems = document.querySelectorAll('.sidebar li');
const experienceItems = document.querySelectorAll('.experience-item');
const line = document.getElementById('line');

function updateLinePositionAndColor() {
    const activeItem = document.querySelector('.sidebar li.active');
    const color = activeItem.getAttribute('data-color');
    const rect = activeItem.getBoundingClientRect();
    const sidebarRect = activeItem.parentElement.getBoundingClientRect();
    
    line.style.backgroundColor = color;
    line.style.top = `${activeItem.offsetTop}px`;
    line.style.height = `${rect.height}px`;
}

sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.sidebar li.active').classList.remove('active');
        item.classList.add('active');

        const target = item.getAttribute('data-target');
        experienceItems.forEach(experience => {
            experience.classList.remove('active');
            if (experience.id === target) {
                experience.classList.add('active');
            }
        });

        updateLinePositionAndColor();
    });
});

// Initialize line position and color on page load
window.addEventListener('load', updateLinePositionAndColor);
// Update line position and color on window resize
window.addEventListener('resize', updateLinePositionAndColor);

