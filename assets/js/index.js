// window.addEventListener('resize', () => {
//     document.querySelectorAll('section').forEach((e) => {
//         // e.style.height = `${window.innerHeight}px`;
//         e.style.height = `100vh`;
//     })
// })
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach((e) => {
        // e.style.height = `${window.innerHeight}px`;
        e.style.height = `100vh`;
        console.log(e)
    })
})



// Lenis smoth Scrolling

const lenis = new Lenis(
    {
        duration: 2.5,
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

function scenceColorChange() {
    let tl = gsap.timeline()
    tl.fromTo('.slide-1', {
        backgroundColor: 'rgba(134, 55, 138, 0.5)',

        backgroundImage: 'none'


        // duration: 2,
    },
        {
            backgroundColor: 'rgba(134, 55, 138, 1)',

            backgroundImage: `url(assets/images/gradiant.png)`,
            duration: 2,

        })// build scene 2
    tl.fromTo('.slide-1', {

        backgroundSize: 'auto 0%',



        // duration: 2,
    },
        {

            backgroundSize: 'auto 100%',

            duration: 5,
            ease: "power3.inOut"

        }, '<1')// build scene 2

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
    tl.fromTo('.vibe-hai .vibe', {
        xPercent: -200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 2,
    })// build scene 2
    tl.fromTo('.vibe-hai .hai', {
        xPercent: 200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 2,
    })// build scene 2
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
            duration: 3.5,
            stagger: 1,


        })
    return tl;
}
function scene6() {
    let tl = gsap.timeline();
    tl.to('.slide1-graphic1 , .slide1-graphic2 ,.slide1-graphic3',
        {
            // opacity: 1,
            yPercent: 50,
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

    .add(scenceColorChange())
    .add(scene1(), "-=4")
    .add(scene2())
    // .add(scene6(), '+=0.2')
    .add(scene3(), "+=0.2") // overlap slightly
    .add(scene4(), "-=50%") // overlap slightly
    .add(scene5(), "-=0.2") // overlap slightly
    .add(scene6(), "+=0.2") // overlap slightly
// master.pause()

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

        backgroundImage: 'none'


        // duration: 2,
    },
        {
            backgroundColor: 'rgba(121, 190, 125, 1)',

            backgroundImage: `url(assets/images/gradiant-yellow.png)`,
            duration: 1,


        })// build scene 2
    tl.fromTo('.slide-2', {

        backgroundSize: 'auto 0%',



        // duration: 2,
    },
        {

            backgroundSize: 'auto 100%',

            duration: 1,
            // ease: "power3.inOut"

        })// build scene 2

    return tl
}
function sceneSlidemove2() {
    let tl = gsap.timeline();
    tl.fromTo('.slide-2', { y: 0, opacity: 1 }, {

        y: -200, duration: 20, opacity: 1, ease: "expo",
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
            scrub: 5,
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
                scrub: 5,
                // start: '-750px top',
                // end: '-400px bottom',
                start: '-700px top',
                end: '0px bottom',
                // markers: true,


                // scrub: 5

            },
        }
    );
    tl.fromTo('.why-rox .why', {
        xPercent: -200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 50,
    }, ">20")// build scene 2
    tl.fromTo('.why-rox .rox', {
        xPercent: 200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 20,
    }, '>10')// build scene 2

    tl.fromTo('.slide-2-txt-box', {
        xPercent: 200,
        scale: 0,
        opacity: 0
        // duration: 2,
    }, {
        xPercent: 0,
        scale: 1,
        opacity: 1,
        duration: 8,
        ease: 'power5'
    }, '>10')// build scene 2
    tl.fromTo('.slide2-graphic1 , .slide2-graphic2 ,.slide2-graphic3',
        {
            yPercent: 0,
            opacity: 0,
            // duration: 2,
        },
        {
            opacity: 1,
            yPercent: 5,
            duration: 3.5,
            stagger: 1,


        })

    return tl;
}


function scene10() {
    let tl = gsap.timeline();

    tl.fromTo('.slide2-graphic1 , .slide2-graphic2 ,.slide2-graphic3',
        {
            yPercent: 0,
        },
        {
            yPercent: 100,
            duration: 1,
            // yoyo: true,
            scrollTrigger: {

                trigger: ".slide2-graphic1 , .slide2-graphic2,.slide2-graphic3",

                scroller: "body",

                // markers: true,

                start: "-520px 20%",

                end: "bottom 50%",
                // markers: true,
                scrub: 5
            },
        })
    return tl;
}

let slide2Master = gsap.timeline()
slide2Master.add(sceneSlidemove2())
slide2Master.add(scenceColorChange2())
    .add(scene7())
    .add(scene8())
    .add(scene9(), "")
    .add(scene10(), "+=2")


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

        backgroundImage: 'none'


        // duration: 2,
    },
        {
            backgroundColor: 'rgba(104, 87, 157, 1)',

            backgroundImage: `url(assets/images/gradient-purple.png)`,
            duration: 1,


        })// build scene 2
    tl.fromTo('.slide-3', {

        backgroundSize: 'auto 0%',



        // duration: 2,
    },
        {

            backgroundSize: 'auto 100%',

            duration: 1,
            // ease: "power3.inOut"

        })// build scene 2

    return tl
}
function sceneSlidemove3() {
    let tl = gsap.timeline();
    tl.fromTo('.slide-3', { y: -200, duration: 2, opacity: 1 },
        {

            y: -350, duration: 20, opacity: 1, ease: "expo",
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
    tl.fromTo('.partnership', {
        xPercent: -200,
        // duration: 2,
    }, {
        xPercent: 0,
        duration: 20,
        delay: 2
    })// build scene 2

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
slide3Master.add(sceneSlidemove3())
    .add(scenceColorChange3())
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

        backgroundImage: 'none'


        // duration: 2,
    },
        {
            backgroundColor: 'rgba(87, 173, 140, 1)',

            backgroundImage: `url(assets/images/gradiant-dark-green.png)`,
            duration: 1,


        })// build scene 2
    tl.fromTo('.slide-4', {

        backgroundSize: 'auto 0%',



        // duration: 2,
    },
        {

            backgroundSize: 'auto 100%',

            duration: 1,
            // ease: "power3.inOut"

        })// build scene 2

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
slide4Master.add(sceneSlidemove4())
    .add(scenceColorChange4())
    .add(scene13())

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

        backgroundColor: 'rgba(87, 173, 140, 1)',

        backgroundImage: 'none'


        // duration: 2,
    },
        {
            backgroundColor: 'rgba(44, 44, 63, 1)',

            backgroundImage: `url(assets/images/gradient-purple-2.png)`,
            duration: 1,


        })// build scene 2
    tl.fromTo('.slide-5', {

        backgroundSize: 'auto 0%',



        // duration: 2,
    },
        {

            backgroundSize: 'auto 100%',

            duration: 1,
            // ease: "power3.inOut"

        })// build scene 2

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
slide5Master.add(sceneSlidemove5())
    .add(scenceColorChange5())
    .add(scene14())
    .add(scene15())



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
        backgroundColor: 'rgb(132,52,135)',

        backgroundImage: 'none'


        // duration: 2,
    },
        {
            backgroundColor: 'rgba(185, 179, 216, 1)',

            backgroundImage: `url(assets/images/grey.png)`,
            duration: 1,


        })// build scene 2
    tl.fromTo('.slide-6', {

        backgroundSize: 'auto 0%',



        // duration: 2,
    },
        {

            backgroundSize: 'auto 100%',

            duration: 1,
            // ease: "power3.inOut"

        })// build scene 2

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
slide6Master.add(sceneSlidemove6())
    .add(scenceColorChange6())
    .add(scene16())
    .add(scene17())
    .add(scene18())
// .add(scene15())