const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show'); 
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden'); // Select all elements with class 'hidden'
hiddenElements.forEach(element => {
    intersectionObserver.observe(element); // Observe each element
});

