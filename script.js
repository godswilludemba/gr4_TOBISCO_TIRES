// let primaryNav = document.querySelector("#primarynav");
// let navToggle = document.querySelector(".mobile-nav-toggle");

// navToggle.addEventListener('click', () => {
//   let visibility = primaryNav.getAttribute('data-visible')


//   if(visibility ==="false"){
//     primaryNav.setAttribute('data-visible', true);
//     navToggle.setAttribute('aria-expanded',true);
//   } else if (visibility === "true"){
//     primaryNav.setAttribute('data-visible', false);
//     navToggle.setAttribute('aria-expanded',false);
//   }

// })



// const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
// mobileNavToggle.addEventListener('click', function () {
//     const isExpanded = this.getAttribute('aria-expanded') === 'true';
//     this.setAttribute('aria-expanded', !isExpanded);
    
//     const barsIcon = this.querySelector('.fa-bars');
//     const timesIcon = this.querySelector('.fa-times');
    
//     barsIcon.style.display = isExpanded ? 'inline' : 'none';
//     timesIcon.style.display = isExpanded ? 'none' : 'inline';
// });


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

