document.querySelector('.contact-btn').addEventListener('mouseenter', () => {
    document.querySelector('.contact-btn').style.animationName = 'contact-btn-animate';
    document.querySelector('.contact-btn').style.animationDuration = '0.5s';
    document.querySelector('.contact-btn').style.animationFillMode = 'forwards';
});

document.querySelector('.contact-btn').addEventListener('mouseleave', () => {
    document.querySelector('.contact-btn').style.animationName = 'contact-btn-animate-out';
    document.querySelector('.contact-btn').style.animationDuration = '0.5s';
    document.querySelector('.contact-btn').style.animationFillMode = 'forwards';
});