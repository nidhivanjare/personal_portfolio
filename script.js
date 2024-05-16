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


document.addEventListener("DOMContentLoaded", function() {
    // Hide all company descriptions except the first one
    var descriptions = document.querySelectorAll(".company-description");
    descriptions.forEach(function(description, index) {
        if (index !== 0) {
            description.style.display = "none";
        }
    });

    // Add click event listeners to company links
    var companyLinks = document.querySelectorAll(".company-list a");
    var companyList = document.querySelector(".company-list");

    companyLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var targetId = link.getAttribute("data-company");
            var targetCompany = document.getElementById(targetId);
            descriptions.forEach(function(description) {
                description.style.display = "none";
            });
            targetCompany.style.display = "block";
        });
    });
});

