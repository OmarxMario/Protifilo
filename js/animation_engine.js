const obv = new IntersectionObserver((entries) => {
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
    obv.observe(element); // Observe each element
});
window.onload = function() {
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.classList.add(savedTheme);
    } else {
      document.body.classList.add("light");
    }
  }

  function toggleTheme() {
    if (document.body.classList.contains("light")) {
      document.body.classList.replace("light", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.replace("dark", "light");
      localStorage.setItem("theme", "light");
    }
  }

function openx(){
  document.querySelector("header").classList.add("burger");
}
function closex(){
  document.querySelector("header").classList.remove("burger");
}
