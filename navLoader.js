// $(document).ready(function(){
//     $("#navbar-frame").load("navbar.html");
// });

// $(function(){
//   $("#navbar-frame").load("navbar.html");
// });

//Video Home page Js
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
// End Video Home page CSS

    (function(){
    const footer = document.getElementById('siteFooter');
    let lastScroll = window.scrollY || 0;
    let ticking = false;
    const THROTTLE_MS = 100; // intervalle entre traitements (ajustable)
    const SHOW_THRESHOLD = 10; // petit déplacement minimal pour éviter jitter

    // utility: is near bottom?
    function isNearBottom(px = 120){
        return (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - px);
    }

    function onScroll(){
        if(!ticking){
        ticking = true;
        setTimeout(() => {
            const current = window.scrollY || 0;
            const delta = current - lastScroll;

            if(Math.abs(delta) < SHOW_THRESHOLD){
            // petit mouvement — ne rien faire
            } else if(delta > 0){
            // scrolldown -> hide footer
            footer.classList.add('hidden');
            footer.setAttribute('aria-hidden','true');
            } else {
            // scrollup -> show footer
            footer.classList.remove('hidden');
            footer.setAttribute('aria-hidden','false');
            }

            // if at bottom, always show
            if(isNearBottom(80)){
            footer.classList.remove('hidden');
            footer.setAttribute('aria-hidden','false');
            }

            lastScroll = current <= 0 ? 0 : current;
            ticking = false;

            // Video Pause
            if (video.paused) {
              video.play();
              //btn.innerHTML = "Pause";
            } 
            else {
              video.pause();
              //btn.innerHTML = "Play";
            }

        }, THROTTLE_MS);
        }
    }

    // Also show footer when user stops scrolling for a moment (good UX on slow scroll)
    let scrollTimeout = null;
    window.addEventListener('scroll', function(){
        onScroll();

        // if user stops scrolling for 1s, show footer (optional — remove if undesired)
        if(scrollTimeout !== null) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
        footer.classList.remove('hidden');
        footer.setAttribute('aria-hidden','false');
        }, 1200);
    }, { passive: true });

    // if the page loads already scrolled near bottom, ensure footer visible
    document.addEventListener('DOMContentLoaded', () => {
        if(isNearBottom(80)) {
        footer.classList.remove('hidden');
        footer.setAttribute('aria-hidden','false');
        }
    });

    // Optional: clicking CTA once shows a quick toast or similar; here we keep simple
    document.getElementById('ctaBtn').addEventListener('click', (e)=>{
        e.preventDefault();
        alert("Action: Essayer la cabine d'essayage virtuelle (demo)");
    });
    })();


// fetch('D:/Mes cours/Seg/project/navbar.html', {
//   mode: 'no-cors',
//   headers: {
//     'Access-Control-Allow-Origin':'*'
//   }
// })
//             .then(response => {
//                 if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.text(); // Get the response as plain text
//         })
//             .then(htmlContent  => {
//                 document.getElementById('navbar-frame').innerHTML = htmlContent;
//             });