//MOBILE TOGGLE STARTS HERE//
const primaryNav = document.querySelector("#primarynav");
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');

mobileNavToggle.addEventListener('click', function () {
    // Toggle the aria-expanded attribute
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);

    // Toggle the data-visible attribute on primaryNav
    const visibility = primaryNav.getAttribute('data-visible') === 'true' ? 'false' : 'true';
    primaryNav.setAttribute('data-visible', visibility);

    // Toggle the "bars" and "x" icons
    const barsIcon = this.querySelector('.fa-bars');
    const timesIcon = this.querySelector('.fa-times');

    if (isExpanded) {
        barsIcon.style.display = 'inline';
        timesIcon.style.display = 'none';
    } else {
        barsIcon.style.display = 'none';
        timesIcon.style.display = 'inline';
    }
});
//MOBILE TOGGLE ENDS HERE//





//HERO SECTION SLIDESHOW STARTS HERE//
let heroSlideIndex = 1;
showHeroSlides(heroSlideIndex);

function plusSlides(n) {
    showHeroSlides(heroSlideIndex += n);
}

function currentSlide(n) {
    showHeroSlides(heroSlideIndex = n);
}

function showHeroSlides(n) {
    let i;
    const heroSlides = document.querySelectorAll(".hero-mySlides");
    const heroDots = document.querySelectorAll(".hero-dot");

    if (n > heroSlides.length) {
        heroSlideIndex = 1;
    }
    if (n < 1) {
        heroSlideIndex = heroSlides.length;
    }

    for (i = 0; i < heroSlides.length; i++) {
        heroSlides[i].style.display = "none";
    }
    for (i = 0; i < heroDots.length; i++) {
        heroDots[i].className = heroDots[i].className.replace(" hero-active", "");
    }

    heroSlides[heroSlideIndex - 1].style.display = "block";
    heroDots[heroSlideIndex - 1].className += " hero-active";
}

// Automatically advance slides every 20 seconds
setInterval(function() {
    plusSlides(1);
}, 10000);
//HERO SECTION SLIDE ENDS HERE//


