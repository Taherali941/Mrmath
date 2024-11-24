// Simple hover animation for skills section
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
    });
});