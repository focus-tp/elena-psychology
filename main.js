document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    // Initial trigger
    setTimeout(revealOnScroll, 100);
    window.addEventListener('scroll', revealOnScroll);

    // Card Flip Logic
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Ignore clicks on links or buttons inside the card
            if (e.target.closest('a') || e.target.closest('button')) {
                return;
            }
            this.classList.toggle('flipped');
        });
    });
});
