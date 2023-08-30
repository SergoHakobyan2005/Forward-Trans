let navbar = document.querySelectorAll('nav ul li');
let mainContainer = document.querySelectorAll('#container');
let navHome = document.querySelector('.navbar .home');
let navHomeMobile = document.querySelector('.nav-mobile .home');
let siteHeader = document.querySelector('#site-header');
let header = document.querySelector('header');
// let siteBackground = document.querySelector('.site-background');
let burger = document.querySelector('.burger');
let mobMenuWrapper = document.querySelector('.mob-menu-wrapper');
let mobMenu = document.querySelector('.mob-menu');
let modalClose = document.querySelector('.mob-menu-wrapper .close');
let navMobile = document.querySelectorAll('.nav-mobile ul li');
let logo = document.querySelectorAll('.logo');

function activeNav() {
    siteHeader.style.cssText = `position: absolute;`;
    header.style.cssText = `height: 125px;`;
    navbar.forEach(item => item.style.cssText = `color: white;`)
    // siteBackground.style.cssText = `display: block;`;
    // logo.src = 'Img/Logo-3.png';
    logo.forEach(item => item.src = 'Img/Logo-3.png');
}

function inactiveNav() {
    siteHeader.style.cssText = `position: relative; margin-top: 0px;`;
    header.style.cssText = `height: auto; background-color: white;`;
    // siteBackground.style.cssText = `display: none;`;
    navbar.forEach(item => item.style.cssText = `color: black;`)
    logo.forEach(item => item.src = 'Img/Logo-2.png');
}

navbar.forEach(item => {
    item.onclick = () => {
        navbar.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
        mainContainer.forEach(item => item.classList.remove('active-container'));
        mainContainer[item.value].classList.add('active-container');

        if (navHome.classList.contains('active')) {
            activeNav();
        } else {
            inactiveNav();
        }
    }
});

function burgerOpen() {
    mobMenuWrapper.classList.toggle('mob-wrapper-active');
    mobMenu.classList.toggle('mob-menu-active');
    mobMenuWrapper.classList.toggle('mob-wrapper-background');
    document.body.classList.toggle('scroll-active');
}

burger.addEventListener('click', function () {
    burgerOpen();
})

mobMenuWrapper.addEventListener('click', function (event) {
    if (event.srcElement === mobMenuWrapper) {
        burgerOpen();
    }
})

modalClose.addEventListener('click', function () {
    burgerOpen();
})

navMobile.forEach(item => {
    item.onclick = () => {
        navMobile.forEach(item => item.classList.remove('active'));
        item.classList.add('active');
        mainContainer.forEach(item => item.classList.remove('active-container'));
        mainContainer[item.value].classList.add('active-container');
        if (navHomeMobile.classList.contains('active')) {
            activeNav();
            burgerOpen();
        } else {
            inactiveNav();
            burgerOpen();
        }
    }
});