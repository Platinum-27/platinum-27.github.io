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

let navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-200px";
}

/*----Sticky Nav Bar----*/

window.addEventListener("scroll", function(){
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
})

