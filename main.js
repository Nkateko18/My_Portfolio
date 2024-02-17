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



function filterItems(category, element) {
    const projectItems = document.querySelectorAll('.project-item');
    const filterLinks = document.querySelectorAll('.search a');

    // Remove active class from all filter links
    filterLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to the clicked filter link
    element.classList.add('active');

    projectItems.forEach(item => {
        if (category === 'All') {
            item.style.display = 'block'; // Show all items
        } else if (item.classList.contains(category)) {
            item.style.display = 'block'; // Show items with matching category
        } else {
            item.style.display = 'none'; // Hide items without matching category
        }
    });
}