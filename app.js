let burger = document.getElementsByClassName('hamburger')[0];
let navLinks = document.getElementsByClassName('nav-links')[0];
let close = document.getElementsByClassName('close')[0];
let bodyWrapper = document.getElementsByClassName('body-wrapper')[0];


burger.addEventListener('click', function(){
    if (navLinks.classList.contains('active')){
        navLinks.classList.remove('active');
        // bodyWrapper.classList.remove('darken');
    }else{
        navLinks.classList.add('active');
        // bodyWrapper.classList.add('darken');
    }
});

close.addEventListener('click', function(){
    navLinks.classList.remove('active');
    // bodyWrapper.classList.remove('darken');
})