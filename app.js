const header = document.querySelector('header');
const start = document.querySelector('.start');
const section = document.querySelector('section');
const end = section.querySelector('h1');
const about1 = document.querySelector('.about1');
const about2 = document.querySelector('.about2');
const about3 = document.querySelector('.about3');
const about4 = document.querySelector('.about4');
const about5 = document.querySelector('.about5');
const about6 = document.querySelector('.about6');
const about7 = document.querySelector('.about7');
const about8 = document.querySelector('.about8');
const about9 = document.querySelector('.about9');
const about10 = document.querySelector('.about10');
const about11 = document.querySelector('.about11');
const about12 = document.querySelector('.about12');

const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const text3 = document.querySelector('.text3');
const text4 = document.querySelector('.text4');
const text5 = document.querySelector('.text5');
const text6 = document.querySelector('.text6');
const text7 = document.querySelector('.text7');
const text8 = document.querySelector('.text8');
const text9 = document.querySelector('.text9');
const text10 = document.querySelector('.text10');
const text11 = document.querySelector('.text11');
const text12 = document.querySelector('.text12');
const text13 = document.querySelector('.text13');



const controller = new ScrollMagic.Controller();

const textAnim = TweenMax.fromTo(start, 2, {opacity: 1}, {opacity: 0});

let scene = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: header,
    triggerHook:0.1
})
.setTween(textAnim)
.setPin(header)
.addTo(controller);


const textAnim1 = TweenMax.fromTo(text1, 1, {opacity: 0}, {opacity: 1});

let scene1 = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: about1,
    triggerHook:0
})
.setTween(textAnim1)
.setPin(about1)
.addTo(controller);

const textAnim2 = TweenMax.fromTo(text2, .5, {opacity: 0}, {opacity: 1});

let scene2 = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: about2,
    triggerHook:0
})
.setTween(textAnim2)
.setPin(about2)
.addTo(controller);

const textAnim3 = TweenMax.fromTo(text3, 1, {opacity: 0}, {opacity: 1});

let scene3 = new ScrollMagic.Scene({
    duration: 5000,
    triggerElement: about3,
    triggerHook:0
})
.setTween(textAnim3)
.setPin(about3)
.addTo(controller);

const textAnim4 = TweenMax.fromTo(text4, 1, {opacity: 0}, {opacity: 1});

let scene4 = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: about4,
    triggerHook:0
})
.setTween(textAnim4)
.setPin(about4)
.addTo(controller);

const textAnim5 = TweenMax.fromTo(text5, 1, {opacity: 0}, {opacity: 1});

let scene5 = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: about5,
    triggerHook:0
})
.setTween(textAnim5)
.setPin(about5)
.addTo(controller);

const textAnim6 = TweenMax.fromTo(text6, 1, {opacity: 0}, {opacity: 1});

let scene6 = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: about6,
    triggerHook:0
})
.setTween(textAnim6)
.setPin(about6)
.addTo(controller);

const textAnim7 = TweenMax.fromTo(text7, 1, {opacity: 0}, {opacity: 1});

let scene7 = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: about7,
    triggerHook:0
})
.setTween(textAnim7)
.setPin(about7)
.addTo(controller);

const textAnim8 = TweenMax.fromTo(text8, 1, {opacity: 0}, {opacity: 1});

let scene8 = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: about8,
    triggerHook:0
})
.setTween(textAnim8)
.setPin(about8)
.addTo(controller);

const textAnim9 = TweenMax.fromTo(text9, 1, {opacity: 0}, {opacity: 1});

let scene9 = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: about9,
    triggerHook:0
})
.setTween(textAnim9)
.setPin(about9)
.addTo(controller);

const textAnim10 = TweenMax.fromTo(text10, 1, {opacity: 0}, {opacity: 1});

let scene10 = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: about10,
    triggerHook:0
})
.setTween(textAnim10)
.setPin(about10)
.addTo(controller);

const textAnim11 = TweenMax.fromTo(text11, 1, {opacity: 0}, {opacity: 1});

let scene11 = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: about11,
    triggerHook:0
})
.setTween(textAnim11)
.setPin(about11)
.addTo(controller);

const textAnim12 = TweenMax.fromTo(text12, 1, {opacity: 0}, {opacity: 1});

let scene12 = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: about12,
    triggerHook:0
})
.setTween(textAnim12)
.setPin(about12)
.addTo(controller);



//Super Bree animation
const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x:100, y:50},
        {x:300, y:40},
        {x:400, y:200},
        {x:500, y:250},
        {x:650, y:200},
        {x:800, y:205}

    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".superb", 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);


//Cloud1 animation
const cloud1Path ={
    curviness:1.25,
    autoRotate: true,
    values:[
        {x:100, y:-5},
        // {x:30, y:4},
        // {x:40, y:20},
        // {x:-50, y:-25},
        // {x:65, y:20},
        // {x:-80, y:-205}
    ]
};


const tcloud1 = new TimelineLite();

tcloud1.add(
    TweenLite.to(".cloud1", 1, {
        bezier: cloud1Path,
        ease: Power1.easeInOut
    })
);




// const superbScene = new ScrollMagic.Scene({
//     triggerElement: about3,
//     duration: 3500,
//     triggerHook: 0
// })
// .setTween(tween)
// .setTween(tcloud1)
// .addTo(controller);