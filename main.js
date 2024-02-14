const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navlist.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navlist.classList.remove('active');
    });
});

const typed = new Typed('.multiple', {
    strings: ['IT Graduate', 'Software Developer', 'UX Designer', 'Business Analyst'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});


function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
}


document.addEventListener("DOMContentLoaded", function () {
    // Set "All" as the default category when the page loads
    filterItems('All');
});

function filterItems(category) {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        if (category === 'All' || item.classList.contains(category)) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}

