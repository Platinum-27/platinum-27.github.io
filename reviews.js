 // Données des reviews
const reviews = [
    {
        text: "Service exceptionnel ! L'équipe a répondu patiemment à toutes nos questions.",
        author: "Marie Lambert",
        rating: 5
    },
    {
        text: "This product saves sooo much time!!",
        author: "Tommy Jones",
        rating: 5
    },
    {
        text: "Je recommande totalemment cette marque. La qualité du produit vaut sont prix.",
        author: "Sophia Larivière",
        rating: 4
    },
    {
        text: "Time saver!!",
        author: "Antony Handerson",
        rating: 5
    },
    {
        text: "L'application est simple à comprendre et le produit est facile à programmer.",
        author: "Julie Petit",
        rating: 4
    }
];

// Éléments DOM
const reviewsTrack = document.getElementById('reviewsTrack');
const indicatorsContainer = document.getElementById('indicators');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const autoPlayToggle = document.getElementById('autoPlayToggle');

// Variables d'état
let currentIndex = 0;
let autoPlayInterval;
const autoPlayDelay = 4000; // 4 secondes

// Fonction pour créer les étoiles de notation
function createRatingStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '★';
        } 
        else {
            stars += '☆';
        }
    }
    return `<div class="rating-stars">${stars}</div>`;
}

// Initialisation
function initReviews() {
    // Créer les reviews
    reviews.forEach((review, index) => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review';
        reviewElement.innerHTML = `
            ${createRatingStars(review.rating)}
                <div class"review-author">
                    <div class="author-avatar">${review.author.charAt(0)}</div>
                        <div class="author-info">
                            <h4>"${review.author}"</h4>
                        </div>
                    </div>
                <p class="review-text">"${review.text}"</p>
                </div>
            `;
        reviewsTrack.appendChild(reviewElement);
                
        // Indicateurs
        const indicator = document.createElement('div');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.addEventListener('click', () => goToReview(index));
        indicatorsContainer.appendChild(indicator);
    });
            
    // Démarrage
    startAutoPlay();
}

// Aller à un review spécifique
function goToReview(index) {
    currentIndex = index;
    updateReviews();
}

// Review suivant
function nextReview() {
    currentIndex = (currentIndex + 1) % reviews.length;
    updateReviews();
}

// Review précédent
function prevReview() {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    updateReviews();
}

// Mettre à jour l'affichage
// Mettre à jour l'affichage
function updateReviews() {
    // Mettre à jour la position
    const reviewWidth = reviewsTrack.children[0].offsetWidth;
    reviewsTrack.style.transform = `translateX(-${currentIndex * reviewWidth}px)`;
            
    // Mettre à jour les indicateurs
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
            
    // Redémarrer le défilement automatique
    resetAutoPlay();
}

// Démarrer le défilement automatique
function startAutoPlay() {
    if (autoPlayToggle.checked) {
        autoPlayInterval = setInterval(nextReview, autoPlayDelay);
    }
}

// Arrêter le défilement automatique
function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Redémarrer le défilement automatique
function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
}

// Événements
prevBtn.addEventListener('click', prevReview);
nextBtn.addEventListener('click', nextReview);

autoPlayToggle.addEventListener('change', function() {
    if (this.checked) {
        startAutoPlay();
    } 
    else {
        stopAutoPlay();
    }
});

// Pause au survol
reviewsTrack.addEventListener('mouseenter', stopAutoPlay);
reviewsTrack.addEventListener('mouseleave', function() {
    if (autoPlayToggle.checked) {
        startAutoPlay();
    }
});

// Initialiser au chargement
document.addEventListener('DOMContentLoaded', initReviews);
