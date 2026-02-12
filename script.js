// Smooth Scrolling Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Handling
const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    // Handle form submission or validation here
    console.log('Form submitted!', Object.fromEntries(formData.entries()));
});

// Intersection Observer Animations
const sections = document.querySelectorAll('section');
const options = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Active Link Highlighting
const navLinks = document.querySelectorAll('nav a');

const highlightActiveLink = () => {
    let scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightActiveLink);