// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the company name link
    var companyNameLink = document.getElementById("company-name-link");

    // Add click event listener to the company name link
    companyNameLink.addEventListener("click", function(event) {
        // Prevent default link behavior
        event.preventDefault();

        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling animation
        });
    });

    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navigation = document.querySelector(".navigation");
    const navLinks = document.querySelectorAll(".navigation a");

    // Toggle the dropdown menu when the hamburger menu is clicked
    hamburgerMenu.addEventListener("click", function() {
        navigation.classList.toggle("active");
    });

    // Close the dropdown menu when a navigation link is clicked
    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            navigation.classList.remove("active");
        });
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the header height
    var headerHeight = document.getElementById('header').offsetHeight;

    // Add click event listener to navigation links
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href');
            var targetSection = document.querySelector(targetId);
            if (targetSection) {
                scrollToSection(targetSection, headerHeight);
            }
        });
    });

    // Add scroll event listener to highlight active section
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        var sections = document.querySelectorAll('.section');
        sections.forEach(function(section) {
            var sectionTop = section.offsetTop - headerHeight;
            var sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                setActiveSection(section);
            }
        });
    });

    // Function to scroll to a section smoothly
    function scrollToSection(section, headerHeight) {
        var targetPosition = section.offsetTop - headerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    // Function to set the active section and corresponding navigation link
    function setActiveSection(section) {
        var activeLinkId = section.getAttribute('id');
        var activeLink = document.querySelector('.nav-link[href="#' + activeLinkId + '"]');
        // Remove active class from all navigation links
        navLinks.forEach(function(navLink) {
            navLink.classList.remove('active');
        });
        // Add active class to the corresponding navigation link
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});


lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});


