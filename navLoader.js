let sections = document.querySelectorAll('section')
let Nlinks = document.querySelectorAll('nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      Nlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('nav a [href*=' + id + ']').classList.add('active');
      });
    };
  });
};

/*----Hamburger Menu----*/

const nav      = document.querySelector('nav');
const navLinks = document.getElementById('navLinks');
const burger   = document.querySelector('nav .fa-bars');

function showMenu(){
  navLinks.style.right = '0';
  nav.classList.add('menu-open');       // JS adds it here
  burger.setAttribute('aria-expanded','true');
}
function hideMenu(){
  navLinks.style.right = '-220px';
  nav.classList.remove('menu-open');    // JS removes it here
  burger.setAttribute('aria-expanded','false');
}


/*----Sticky Nav Bar----*/

window.addEventListener("scroll", function(){
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
})

/*----Scrolling Info columns----*/
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));

