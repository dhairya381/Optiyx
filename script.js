document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-button');
    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/1zUjJtmr_U8Yx6SDU_JReD_yL3YponFQEZLciNIPXhwU/edit';

    ctaButton.addEventListener('click', () => {
        window.open(GOOGLE_FORM_URL, '_blank');
    });

    // Optional: Add subtle parallax effect to mouse movement
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const glow = document.querySelector('.background-glow');
        glow.style.transform = `translate(${mouseX * -20}px, ${mouseY * -20}px)`;
    });
});
