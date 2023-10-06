// window.addEventListener('resize', () => {
//     document.querySelectorAll('section').forEach((e) => {
//         // e.style.height = `${window.innerHeight}px`;
//         e.style.height = `100vh`;
//     })
// })

// window.scrollTo(0,sectionTop - 120)

// console.log(li)



window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach((e) => {
        // e.style.height = `${window.innerHeight}px`;
        e.style.height = `100vh`;
        console.log(e)
    })
    //     btn = document.createElement('button');
    //     btn.textContent = 'Pause'
    //     btn.className = 'Pause'
    //     console.log(btn.style)
    //     btn.style.position = "absolute"
    //     btn.style.top = "0px"
    //     btn.style.width = "80px"
    //     btn.style.zIndex = 999999
    //     btn1 = document.createElement('button');
    //     btn1.textContent = 'Play'
    //     btn1.className = 'play'
    //     console.log(btn.style)
    //     btn1.style.position = "absolute"
    //     btn1.style.top = "0px"
    //     btn1.style.left = "80px"
    //     btn1.style.width = "80px"
    //     btn1.style.zIndex = 999999
    //     btn2 = document.createElement('button');
    //     btn2.textContent = 'restart'
    //     btn2.className = 'play'
    //     console.log(btn.style)
    //     btn2.style.position = "absolute"
    //     btn2.style.top = "0px"
    //     btn2.style.left = "160px"
    //     btn2.style.width = "80px"
    //     btn2.style.zIndex = 999999
    //     document.querySelector('.slide-1').appendChild(btn)
    //     document.querySelector('.slide-1').appendChild(btn1)
    //     document.querySelector('.slide-1').appendChild(btn2)
    //     btn.addEventListener('click', function () {
    //         master.pause()
    //     })
    //     btn1.addEventListener('click', function () {
    //         master.play()
    //     })
    //     btn2.addEventListener('click', function () {
    //         master.restart()
    //     })
})



// Lenis smoth Scrolling

const lenis = new Lenis(
    {
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: 'vertical', // vertical, horizontal
        gestureDirection: 'vertical', // vertical, horizontal, both
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 1,
        infinite: false,
    }
)

// lenis.on('scroll', (e) => {
//     console.log(e)
// })

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



// let tl = gsap.timeline({
//     delay: 0.5,
//     paused: true, // default is false
//     repeat: 2, // number of repeats (-1 for infinite)
//     repeatDelay: 1, // seconds between repeats
//     repeatRefresh: true, // invalidates on each repeat
//     yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
//     defaults: { // children inherit these defaults
//         duration: 1,
//         ease: "none"
//     },
//     smoothChildTiming: true,
//     autoRemoveChildren: true,
//     // onComplete: myFunc,
//     // other callbacks: 
//     // onStart, onUpdate, onRepeat, onReverseComplete
//     // Each callback has a params property as well
//     // i.e. onUpdateParams (Array)
// });

function navBar() {
    let easeValue = "slow(0.3, 0.5, false)"
    let tl = gsap.timeline(
        {
            scrollTrigger: {

                trigger: "header",

                scroller: "body",

                // duration: 0.05,
                scrub: 2,
                start: '10% top',
                end: '50% bottom',



                // scrub: 5

            },

        }
    )

    tl.fromTo('header', {



        // duration: 2,
    },
        {
            height: '100px',
            duration: 5,
            ease: easeValue
        })// build scene 2
    tl.fromTo('header figure img', {




        // duration: 2,
    },
        {

            height: '60px',
            duration: 50,

            ease: easeValue


        }, "<1")// build scene 2
    tl.fromTo('header figure', {




        // duration: 2,
    },
        {

            padding: "20px 0px",
            duration: 5,
            ease: easeValue


        }, "<1")// build scene 2
    tl.fromTo('header nav', {




        // duration: 2,
    },
        {

            marginTop: " 45px",
            duration: 5,
            ease: easeValue


        }, "<1")// build scene 2
    tl.fromTo('header .apply-now', {




        // duration: 2,
    },
        {

            marginTop: " 25px",
            duration: 5,
            ease: easeValue


        }, "<1")// build scene 2
    return tl;
}
function scenceColorChange() {
    let tl = gsap.timeline()

    tl.fromTo('.slide-1', {
        backgroundColor: 'rgba(134, 55, 138, 0.5)',




        // duration: 2, 
    },
        {
            backgroundColor: 'rgba(134, 55, 138, 1)',
            duration: 1.5,
            ease: "expo.in"



        })// build scene 2
    tl.fromTo('.slide-1 .shades', {
        opacity: 0,



        // duration: 2,
    },
        {
            opacity: 1,

            duration: 5,
            ease: "expo.inOut"

        }, "-=0.5")// build scene 2


    return tl
}



function scene1() {
    let tl = gsap.timeline();


    tl.fromTo('.char-slide1', {
        yPercent: 100,

        // duration: 2,
    }, {
        yPercent: 0,
        duration: 2,

    })// build scene 2

    return tl;
}



function scene2() {
    let tl = gsap.timeline();

    tl.fromTo(".char-slide1 img",
        { x: -10, duration: 2 },
        { x: 20, duration: 2, repeat: -1, yoyo: true })

}
function scene3() {
    let tl = gsap.timeline();
    tl.fromTo('.real-online-exp .real', {
        xPercent: -200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 2,
    })// build scene 2
    tl.fromTo('.real-online-exp .online', {
        xPercent: -200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 2,
    }, "-=1.5")// build scene 2
    tl.fromTo('.real-online-exp .experience', {
        xPercent: -200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 2,
    }, "-=1")// build scene 2

    tl.fromTo('.real-online-exp-nav ul',
        {

            opacity: 0,
            scale: 0
            // duration: 2,
        },
        {
            opacity: 1,
            scale: 1,
            duration: 1,



        }, "<1")

    return tl;
}
function scene4() {
    let tl = gsap.timeline();
    tl.fromTo('.slide-1-txt-box', {
        xPercent: -800,
        scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        xPercent: 0,
        scale: 1,
        opacity: 1,
        duration: 3.5,
        ease: 'power5'
    })// build scene 2

    return tl;
}


function scene5() {
    let tl = gsap.timeline();
    tl.fromTo('.slide1-graphic1 , .slide1-graphic2 ,.slide1-graphic3',
        {
            yPercent: 0,
            opacity: 0,
            // duration: 2,
        },
        {
            opacity: 1,
            yPercent: 5,
            duration: 1.5,
            stagger: 1,


        })

    return tl;
}
function scene6_2() {
    let tl = gsap.timeline();
    tl.fromTo('.slide1-graphic1',
        { rotate: -360 },
        {
            rotate: 360, duration: 2,
            scrollTrigger: {

                trigger: ".slide1-graphic1 , .slide1-graphic2 ,.slide1-graphic3",

                scroller: "body",

                markers: false,

                start: "top 20%",

                end: "bottom 50%",
                // markers: true,

                scrub: 5

            },
        })


    return tl;
}
function scene6() {
    let tl = gsap.timeline();
    tl.to('.slide1-graphic1 , .slide1-graphic2 ,.slide1-graphic3',
        {
            // opacity: 1,
            yPercent: 100,
            // duration: 2,
            // stagger: 2,
            yoyo: true,
            scrollTrigger: {

                trigger: ".slide1-graphic1 , .slide1-graphic2 ,.slide1-graphic3",

                scroller: "body",

                markers: false,

                start: "top 20%",

                end: "bottom 50%",
                // markers: true,

                scrub: 5

            },
        })
    return tl;
}





let master = gsap.timeline()

    .add(navBar())
    .add(scenceColorChange())
    .add(scene1(), "-=1.5")
    .add(scene2())
    // .add(scene6(), '+=0.2')
    .add(scene3(), "+=0.2") // overlap slightly
    // .add(scene4(), "-=50%") // overlap slightly
    .add(scene5(), "-=0.2") // overlap slightly
    .add(scene6(), "+=0.2") // overlap slightly
    .add(scene6_2(), "+=0.2") // overlap slightly

// master.pause()
// master.controls();
function scenceColorChange2() {
    let tl = gsap.timeline({
        scrollTrigger: {

            trigger: ".slide-2",

            scroller: "body",

            // duration: 0.05,
            scrub: 1,
            start: '-500px 0%',
            end: '600px bottom',
            // markers: true,

            // scrub: 5

        },
    })
    tl.fromTo('.slide-2', {
        backgroundColor: 'rgba(134, 55, 138,1)',



        // duration: 2,
    },
        {
            backgroundColor: 'rgba(121, 190, 125, 1)',

            duration: 1.5,
            ease: "expo.in"


        })// build scene 2
    tl.fromTo('.slide-2 .shades', {
        opacity: 0,



        // duration: 2,
    },
        {
            opacity: 1,

            duration: 20,
            ease: "expo.in"

        }, "-=0.5")// build scene 2

    return tl
}
function sceneSlidemove2() {
    let tl = gsap.timeline();
    tl.fromTo('.slide-2', { y: 0, opacity: 1 }, {

        y: -135, duration: 10, opacity: 1, ease: "expo",
        scrollTrigger: {

            trigger: ".slide-2",

            scroller: "body",

            // duration: 0.05,
            scrub: 5,
            start: '-750px top',
            end: '1500px bottom',
            // markers: true,

            // scrub: 5

        },

    })// build scene 2

    return tl;
}
function scene7() {
    let tl = gsap.timeline();
    tl.fromTo('.char-slide2', { y: 700, opacity: 1 }, {

        y: 0, duration: 2, opacity: 1, stagger: 1,
        scrollTrigger: {

            trigger: ".char-slide2",

            scroller: "body",

            // duration: 0.05,
            scrub: true,
            start: '-1400px top',
            end: '0px bottom',
            // markers: true,

            // scrub: 5

        },

    })// build scene 2

    return tl;
}



function scene8() {
    let tl = gsap.timeline();
    tl.fromTo(".char-slide2 img",
        { x: -10, duration: 2 },
        { x: 20, duration: 2, repeat: -1, yoyo: true })
    // return tl
}


function scene9() {
    let tl = gsap.timeline(
        {
            scrollTrigger: {

                trigger: ".why-rox",

                scroller: "body",

                // duration: 0.05,
                scrub: 1,
                // start: '-750px top',
                // end: '-400px bottom',
                start: '-650px top',
                end: '-50px 0px',
                markers: true,


                // scrub: 5

            },
        }
    );
    tl.fromTo('.why-rox h2', {
        xPercent: 200,

    }, {
        xPercent: 0,
        duration: 1000,
    })
    tl.fromTo('.why-rox .rox', {
        xPercent: 200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 500,
    }, '<100%')
    tl.fromTo('.why-rox .roll', {
        xPercent: 200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 500,
    }, '<50%')



    tl.fromTo('.slide-2-txt-box p', {
        xPercent: 200,
        scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        xPercent: 0,
        scale: 1,
        opacity: 1,
        duration: 500,

    }, '<80%')// build scene 2

    tl.fromTo('.slide-2-txt-box h3', {
        xPercent: 200,
        scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        xPercent: 0,
        scale: 1,
        opacity: 1,
        duration: 500,
    }, "<100%")// build scene 2
    tl.fromTo('.slide-2-txt-box .btn img', {
        // xPercent: 200,
        scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        // xPercent: 0,
        scale: 1,
        opacity: 1,
        duration: 500,
    })// build scene 2
    tl.fromTo('.slide2-graphic1 , .slide2-graphic2 ,.slide2-graphic3',
        {
            opacity: 0

            // duration: 2,
        },
        {
            opacity: 1,

            duration: 50,
            stagger: 1,


        })

    return tl;
}


function scene10() {
    let tl = gsap.timeline();

    tl.fromTo('.slide2-graphic1 , .slide2-graphic2 , .slide2-graphic3', {
        yPercent: 0
    },
        {

            yPercent: 100,
            // duration: 2,
            // stagger: 2,
            // yoyo: true,
            scrollTrigger: {

                trigger: ".slide2-graphic1 , .slide2-graphic2 , .slide2-graphic3",

                scroller: "body",

                markers: false,

                start: "-500px 20%",

                end: "0px bottom",
                // markers: true,

                scrub: 5

            },
        })
    return tl;
}

let slide2Master = gsap.timeline()
// slide2Master.add(sceneSlidemove2())
slide2Master.add(scenceColorChange2())
    .add(scene7())
    .add(scene8())
    .add(scene9())
    .add(scene10())

slide2Master.pause()

