let screenHeight = window.innerHeight;
window.onresize = () => {
    screenHeight = window.innerHeight;
};

// animacja startowa, uruchamiana przy ładowaniu strony
const startTl = gsap.timeline({
    defaults: {
        duration: 1.5,
        ease: 'power2.out'
    }
});

gsap.set('.navigation-bar', {opacity: 0});
gsap.set('.landing-page-images', {opacity: 0});
gsap.set('.landing-page-element', {opacity: 0});
startTl.to('.navigation-bar', {opacity: 1, delay: 1});
startTl.to('.landing-page-images', {opacity: 1}, '<25%');
startTl.to('.landing-page-element', {opacity: 1, stagger: 0.25}, '<25%');

// animacje ScrollTo
const navigationLinks = document.querySelectorAll('.nav-link');
const footerLink = document.querySelector('.footer-link');
const sectionOffsetY = 85;
const burgerMenuButton = document.querySelector('.navbar-toggler').classList.contains('collapsed');
navigationLinks.forEach((link, index) => {

    let screenWidth = document.body.offsetWidth;
    let sectionScrolled = '.section-' + (index + 1);
    let sectionOffsetY = index === 0 ? 85 : 0;
    // bootstrapowe lety

    link.addEventListener('click', () => {
        let myCollapse = document.querySelector('.navbar-collapse');
        let bsCollapse = new bootstrap.Collapse(myCollapse);
        if (screenWidth < 768 && burgerMenuButton === false) {
            bsCollapse.hide();
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: sectionScrolled,
                    offsetY: sectionOffsetY
                },
                ease: 'none'
            });
        } else if (!burgerMenuButton) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: sectionScrolled,
                    offsetY: sectionOffsetY
                },
                ease: 'none'
            });
        }
    });
});
footerLink.addEventListener('click', () => {
    gsap.to(window, {duration: 1, scrollTo: {
        y: '.landing-page',
        offsetY: sectionOffsetY
    }})
});

// animacje ScrollTrigger dla landing-page
const landingPageLeaveTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.landing-page',
        start: '0%',
        end: '75%',
        scrub: true
    },
    defaults: {
        duration: 1
    }
});
landingPageLeaveTl.to('.landing-page-images', {opacity: 0});
landingPageLeaveTl.to('.landing-page-text-animate', {opacity: 0, stagger: 0.2}, '<');

// animacje ScrollTrigger dla services
const servicesBlock = document.querySelectorAll('.services-block');
servicesBlock.forEach(block => {
    const servicesBlockEnter = gsap.timeline({
        scrollTrigger: {
            trigger: block,
            start: '-100%',
            end: '0%',
            scrub: true
        },
        defaults: {
            duration: 1
        }
    });
    const servicesBlockLeave = gsap.timeline({
        scrollTrigger: {
            trigger: block,
            start: '0%',
            end: '100%',
            scrub: true
        },
        defaults: {
            duration: 1
        }
    });
    const servicesImg = block.querySelector('.services-img');
    const servicesText = block.querySelector('.services-text');
    gsap.set(servicesImg, {opacity: 0});
    gsap.set(servicesText, {opacity: 0});
    servicesBlockEnter.to(servicesImg, {opacity: 1});
    servicesBlockEnter.to(servicesText, {opacity: 1}, '<50%');
    servicesBlockLeave.to(servicesImg, {opacity: 0});
    servicesBlockLeave.to(servicesText, {opacity: 0}, '<50%');
});

// animacja ScrollTrigger dla nagłówka portfolio
const portfolioEnterTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.portfolio-text',
        start: '-200%',
        end: '-100%',
        scrub: true
    },
    defaults: {
        duration: 1
    }
});
const portfolioLeaveTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.portfolio-text',
        start: '0%',
        end: '50%',
        scrub: true
    },
    defaults: {
        duration: 1
    }
});
gsap.set('.portfolio-text-animate', {opacity: 0});
portfolioEnterTl.to('.portfolio-text-animate', {opacity: 1, stagger: 0.5});
portfolioLeaveTl.to('.portfolio-text-animate', {opacity: 0, stagger: 0.5});

// animacje ScrollTrigger dla shakerr.com
const shakerrEnterTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.shakerr',
        start: '-' + screenHeight + 'px',
        end: '100%',
        scrub: true
    },
    defaults: {
        duration: 1
    }
});
const shakerrLeaveTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.shakerr',
        start: '0%',
        end: '120%',
        scrub: true
    },
    defaults: {
        duration: 1
    }
});

gsap.set('.shakerr-header', {opacity: 0});
gsap.set('.shakerr-quote', {opacity: 0});
gsap.set('.shakerr-screen-img', {opacity: 0, scale: 0.7});
gsap.set('.shakerr-text-animate', {opacity: 0.5});
shakerrEnterTl.to('.shakerr-header', {opacity: 1});
shakerrEnterTl.to('.shakerr-quote', {opacity: 1, stagger: 0.2}, '<20%');
shakerrEnterTl.to('.shakerr-screen-img', {opacity: 1, scale: 1, duration: 0.75}, '<20%');
shakerrEnterTl.to('.shakerr-text-animate', {opacity: 1, stagger: 0.25}, '<30%');

shakerrLeaveTl.to('.shakerr-header', {opacity: 0});
shakerrLeaveTl.to('.shakerr-quote', {opacity: 0, stagger: 0.2}, '<20%');
shakerrLeaveTl.to('.shakerr-screen-img', {opacity: 0, scale: 0.7, duration: 0.75}, '<20%');
shakerrLeaveTl.to('.shakerr-text-animate', {opacity: 0.5, stagger: 0.25}, '<30%');

// animacje ScrollTrigger dla contact
const contactEnterTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.contact',
        start: '-' + (screenHeight * (2/3)) + 'px',
        end: '0%',
        scrub: true
    },
    defaults: {
        duration: 1
    }
});

gsap.set('.contact h1', {opacity: 0});
gsap.set('.contact p', {opacity: 0});
gsap.set('.contact-form', {opacity: 0});
contactEnterTl.to('.contact h1', {opacity: 1});
contactEnterTl.to('.contact p', {opacity: 1}, '<20%');
contactEnterTl.to('.contact-form', {opacity: 1}, '<10%');