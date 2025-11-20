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

/*---Infinite horizontal scroll---*/
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

/*---Pricing button---*/
const checkbox = document.querySelector('#checkbox');
const label = document.querySelector('.label');
const wrapper = document.querySelector('.price-container');

checkbox.addEventListener('change', () => {
  // le “knob” du switch
  label.classList.toggle('selected', checkbox.checked);
  // bascule l’affichage: annuel ↔ mensuel
  wrapper.classList.toggle('is-monthly', checkbox.checked);
});

document.querySelectorAll('.show_price').forEach(el => el.classList.toggle('show_price'));
