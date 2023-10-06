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
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: 'vertical', // vertical, horizontal
        gestureDirection: 'both', // vertical, horizontal, both
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: true,
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
                end: '0px 0px',
                markers: true,


                // scrub: 5

            },
        }
    );
    tl.fromTo('.why-rox h2', {
        xPercent: 200,

    }, {
        xPercent: 0,
        duration: 50,
    })
    tl.fromTo('.why-rox .rox', {
        xPercent: 200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 50,
    })
    tl.fromTo('.why-rox .roll', {
        xPercent: 200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 50,
    })



    tl.fromTo('.slide-2-txt-box p', {
        xPercent: 200,
        scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        xPercent: 0,
        scale: 1,
        opacity: 1,
        duration: 50,
        ease: 'power5'
    })// build scene 2

    tl.fromTo('.slide-2-txt-box h3', {
        xPercent: 200,
        scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        xPercent: 0,
        scale: 1,
        opacity: 1,
        duration: 50,
        ease: 'power5'
    })// build scene 2
    tl.fromTo('.slide-2-txt-box .btn img', {
        // xPercent: 200,
        scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        // xPercent: 0,
        scale: 1,
        opacity: 1,
        duration: 50,
        ease: 'power5'
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


function scenceColorChange3() {
    let tl = gsap.timeline({
        scrollTrigger: {

            trigger: ".slide-3",

            scroller: "body",

            // duration: 0.05,
            scrub: 1,
            start: '-700px top',
            end: '600px bottom',
            // markers: true,

            // scrub: 5

        },
    })
    tl.fromTo('.slide-3', {

        backgroundColor: 'rgba(121, 190, 125, 1)',

        // backgroundImage: 'none'


        // duration: 2,
    },
        {
            backgroundColor: 'rgba(104, 87, 157, 1)',

            // backgroundImage: `url(assets/images/gradient-purple.png)`,
            duration: 1,


        })// build scene 2
    tl.fromTo('.slide-3 .shades', {
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
function sceneSlidemove3() {
    let tl = gsap.timeline();
    tl.fromTo('.slide-3', { y: -100, duration: 2, opacity: 1 },
        {

            y: -270, duration: 20, opacity: 1, ease: "expo",
            scrollTrigger: {

                trigger: ".slide-3",

                scroller: "body",

                // duration: 0.05,
                scrub: 4,
                start: '-650px top',
                end: '1000px bottom',

            },

        })// build scene 2

    return tl;
}


function scene11() {
    let tl = gsap.timeline(
        {
            scrollTrigger: {

                trigger: ".partnership",

                scroller: "body",

                // duration: 0.05,
                scrub: 5,
                start: '-500px top',
                end: '100px bottom',
                // markers: true,

                // scrub: 5

            },
        }
    );
    tl.fromTo('.partnership h2', {
        xPercent: -200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 50,
    })
    tl.fromTo('.partnership .collab', {
        xPercent: -200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 50,
    })
    tl.fromTo('.partnership .central', {
        xPercent: -200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 50,
    })

    tl.fromTo('.char-slide3', { y: 700, opacity: 1 }, {

        y: 0, duration: 20, opacity: 1,


    }, "<20")
    tl.fromTo('.slide3-graphic1 , .slide3-graphic2 ,.slide3-graphic3',
        {
            yPercent: 0,
            opacity: 0,
            // duration: 2,
        },
        {
            opacity: 1,
            yPercent: 5,
            duration: 3.5,
            stagger: 1.5,


        })

    tl.fromTo('.partnership-nav ul li',
        {
            yPercent: 0,
            opacity: 0,
            scale: 0
            // duration: 2,
        },
        {
            opacity: 1,
            scale: 1,
            duration: 3.5,
            stagger: 1.5,


        }, "<1")


    return tl;
}


function scene12() {
    let tl = gsap.timeline({
        scrollTrigger: {

            trigger: ".slide3-graphic1",

            scroller: "body",

            // markers: true,

            start: "-80px 30%",

            end: "80% 80%",
            // markers: true,
            scrub: 5
        },
    });

    tl.fromTo('.slide3-graphic1 ',
        {
            xPercent: 0,
        },
        {
            xPercent: 30,
            // yoyo: true
            duration: 2,


        })

    tl.fromTo('.slide3-graphic2 ',
        {
            xPercent: 0,
        },
        {
            xPercent: -30,
            // yoyo: true
            duration: 2,


        }, "-=1")

    tl.fromTo('.slide3-graphic3',
        {
            xPercent: 0,
        },
        {
            xPercent: -70,
            // yoyo: true
            duration: 2,


        }, "-=1")


    return tl;
}
// overlap slightly
// .add(scene5()) // overlap slightly

let slide3Master = gsap.timeline()
// slide3Master.add(sceneSlidemove3())
slide3Master.add(scenceColorChange3())
    .add(scene11())
    .add(scene12(), "+=2")

function scenceColorChange4() {
    let tl = gsap.timeline({
        scrollTrigger: {

            trigger: ".slide-4",

            scroller: "body",

            // duration: 0.05,
            scrub: 1,
            start: '-700px top',
            end: '600px bottom',
            // markers: true,

            // scrub: 5

        },
    })
    tl.fromTo('.slide-4', {

        backgroundColor: 'rgba(104, 87, 157, 1)',

        // backgroundImage: 'none'


        // duration: 2,
    },
        {
            backgroundColor: 'rgba(238, 234, 153, 1)',

            // backgroundImage: `url(assets/images/gradiant-dark-green.png)`,
            duration: 1,


        })// build scene 2
    tl.fromTo('.slide-4 .shades', {
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

function sceneSlidemove4() {
    let tl = gsap.timeline();
    tl.fromTo('.slide-4', { y: -350, duration: 2, opacity: 1 }, {

        y: -500, duration: 10, opacity: 1, ease: "expo",
        scrollTrigger: {

            trigger: ".slide-4",

            scroller: "body",

            // duration: 0.05,
            scrub: 4,
            start: '-650px top',
            end: '1000px bottom',
            // markers: true,

            // scrub: 5

        },

    })// build scene 2

    return tl;
}

function scene13() {
    let tl = gsap.timeline(
        {
            scrollTrigger: {

                trigger: ".plans",

                scroller: "body",

                // duration: 0.05,
                scrub: 5,
                start: '-500px 30%',
                end: '100px bottom',
                // markers: true,

                // scrub: 5

            },
        }
    );
    tl.fromTo('.plans', {
        xPercent: -200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 20,
        delay: 2
    })// build scene 2

    tl.fromTo('.char-slide4', { y: 700, x: 700, opacity: 0, scale: 0.7 }, {

        y: 0, x: 0, duration: 8, opacity: 1, scale: 1
    }, "<20")


    tl.fromTo('.plans-nav ul li , .plans-nav .view-all-box .view-all',
        {
            yPercent: 0,
            opacity: 0,
            scale: 0
            // duration: 2,
        },
        {
            opacity: 1,
            scale: 1,
            duration: 4.5,
            stagger: 1.5,


        }, "<1")


    return tl;
}


let slide4Master = gsap.timeline()
// slide4Master.add(sceneSlidemove4())
slide4Master.add(scenceColorChange4())
// .add(scene13())


function scenceColorChange5() {
    let tl = gsap.timeline({
        scrollTrigger: {

            trigger: ".slide-5",

            scroller: "body",

            // duration: 0.05,
            scrub: 1,
            start: '-700px top',
            end: '600px bottom',
            // markers: true,

            // scrub: 5

        },
    })
    tl.fromTo('.slide-5', {

        backgroundColor: 'rgba(234, 226, 152, 1)',


        // duration: 2,
    },
        {
            backgroundColor: 'rgba(87, 173, 140, 1)',

            duration: 1,


        })// build scene 2

    tl.fromTo('.slide-5 .shades', {
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

function sceneSlidemove5() {
    let tl = gsap.timeline();
    tl.fromTo('.slide-5', { y: -500, duration: 2, opacity: 1 }, {

        y: -650, duration: 10, opacity: 1, ease: "expo",
        scrollTrigger: {

            trigger: ".slide-5",

            scroller: "body",

            // duration: 0.05,
            scrub: 4,
            start: '-650px top',
            end: '1000px bottom',
            // markers: true,

            // scrub: 5

        },

    })// build scene 2

    return tl;
}


function scene14() {
    let tl = gsap.timeline(
        {
            scrollTrigger: {

                trigger: ".help-us",

                scroller: "body",

                // duration: 0.05,
                scrub: 5,
                start: '-500px 30%',
                end: '100px bottom',
                // markers: true,

                // scrub: 5

            },
        }
    );
    tl.fromTo('.help-us', {
        xPercent: -200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 20,
        delay: 2
    })// build scene 2

    tl.fromTo('.char-slide5', { y: 700, x: -700, opacity: 0, scale: 0 }, {

        y: 0, x: 0, duration: 8, opacity: 1, scale: 1
    }, "<10")

    tl.fromTo('.slide5-graphic1 , .slide5-graphic2 ,.slide5-graphic3,.slide5-nav .view-all',
        {
            yPercent: 0,
            opacity: 0,
            scale: 0
            // duration: 2,
        },
        {
            opacity: 1,
            scale: 1,
            duration: 3.5,
            stagger: 1.5,


        }, "<1")



    return tl;
}

function scene15() {
    let tl = gsap.timeline({
        scrollTrigger: {

            trigger: ".slide5-graphic1",

            scroller: "body",

            // markers: true,

            start: "-230px 20%",

            end: "80% 80%",
            // markers: true,
            scrub: 5
        },
    });

    tl.fromTo('.slide5-graphic1 ',
        {
            xPercent: 0,
        },
        {
            xPercent: 30,
            // yoyo: true
            duration: 2,


        })

    tl.fromTo('.slide5-graphic2 ',
        {
            xPercent: 0,
        },
        {
            xPercent: -30,
            // yoyo: true
            duration: 2,


        }, "-=1")

    tl.fromTo('.slide5-graphic3',
        {
            xPercent: 0,
        },
        {
            xPercent: -70,
            // yoyo: true
            duration: 2,


        }, "-=1")
    return tl;
}

let slide5Master = gsap.timeline()
// slide5Master.add(sceneSlidemove5())
slide5Master.add(scenceColorChange5())
    .add(scene14())
//     .add(scene15())
// slide5Master.pause()



function scenceColorChange6() {
    let tl = gsap.timeline({
        scrollTrigger: {

            trigger: ".slide-6",

            scroller: "body",

            // duration: 0.05,
            scrub: 1,
            start: '-600px top',
            end: '600px bottom',
            // markers: true,

            // scrub: 5

        },
    })
    tl.fromTo('.slide-6', {
        backgroundColor: 'rgba(87, 173, 140, 1)',


        // duration: 2,
    },
        {
            backgroundColor: '#2b2c3e',


            duration: 1,


        })// build scene 2
    tl.fromTo('.slide-6 .shades', {
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

function sceneSlidemove6() {
    let tl = gsap.timeline();
    tl.fromTo('.slide-6', { y: -650, duration: 2, opacity: 1 }, {

        y: -800, duration: 10, opacity: 1, ease: "expo",
        scrollTrigger: {

            trigger: ".slide-6",

            scroller: "body",

            // duration: 0.05,
            scrub: 4,
            start: '-650px top',
            end: '1000px bottom',
            // markers: true,

            // scrub: 5

        },

    })// build scene 2

    return tl;
}


function scene16() {
    let tl = gsap.timeline(
        {
            scrollTrigger: {

                trigger: ".contact",

                scroller: "body",

                // duration: 0.05,
                scrub: 5,
                start: '-600px top',
                end: '100px bottom',

                // scrub: 5

            },
        }
    );
    tl.fromTo('.contact , .us', {
        xPercent: -200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 50,
        delay: 2,
        stagger: 30
    })// build scene 2


    tl.fromTo('.slide6-graphic1 , .slide6-graphic2',
        {
            yPercent: 0,
            opacity: 0,
            // duration: 2,
        },
        {
            opacity: 1,
            yPercent: 5,
            duration: 3.5,
            stagger: 1.5,


        })
    tl.fromTo('.slide6-nav ul li',
        {
            yPercent: 0,
            opacity: 0,
            scale: 0
            // duration: 2,
        },
        {
            opacity: 1,
            scale: 1,
            duration: 4,
            stagger: 1.5,


        }, "<10")


    return tl;
}

function scene17() {
    let tl = gsap.timeline({
        scrollTrigger: {

            trigger: ".slide6-graphic1",

            scroller: "body",

            // markers: true,

            start: "30px 30%",

            end: "80% 80%",
            // markers: true,
            scrub: 5
        },
    });

    tl.fromTo('.slide6-graphic1 ',
        {
            xPercent: 0,
        },
        {
            xPercent: 30,
            // yoyo: true
            duration: 2,


        })

    tl.fromTo('.slide6-graphic2 ',
        {
            xPercent: 0,
        },
        {
            xPercent: -30,
            // yoyo: true
            duration: 2,


        }, "-=1")


    return tl;
}


function scene18() {
    let tl = gsap.timeline(
        {
            scrollTrigger: {

                trigger: ".MainFooter",

                scroller: "body",

                // duration: 0.05,
                scrub: 5,
                start: 'bottom bottom',
                end: '100px bottom',
                // markers: true
                // scrub: 5

            },
        }
    );

    tl.fromTo('.mainFooter .socialBox>img',
        {
            yPercent: 0,
            opacity: 0,
            scale: 0
            // duration: 2,
        },
        {
            opacity: 1,
            scale: 1,
            duration: 80,
            stagger: 1,


        })
    tl.fromTo('.mainFooter .sociallogo p,.mainFooter .sociallogo img',
        {
            yPercent: 0,
            opacity: 0,
            scale: 0
            // duration: 2,
        },
        {
            opacity: 1,
            scale: 1,
            duration: 80,
            stagger: 5,
            // ease: 'power3.in'


        }, "<10")
    tl.fromTo('.mainFooter nav ul li',
        {
            yPercent: 0,
            opacity: 0,
            scale: 0
            // duration: 2,
        },
        {
            opacity: 1,
            scale: 1,
            duration: 10,
            stagger: 5,


        }, "<15")


    return tl;
}
let slide6Master = gsap.timeline()
// slide6Master.add(sceneSlidemove6())
slide6Master.add(scenceColorChange6())
    .add(scene16())
    .add(scene17())
    .add(scene18())
// .add(scene15())



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}