//Navbar variables and code
let navSlide = () => {
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav-links');
    let navLinks = document.querySelectorAll('.nav-links li');

    //Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    

    //Animate links
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = '';
        }
        else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.3}s`;

        }

    });
    burger.classList.toggle('toggle');
    
});
}
navSlide();

