gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

// Split text
const helloSplit = new SplitText(".hello_text", { type: "chars" });
const welcomeSplit = new SplitText(".welcome_text", { type: "lines" });

const convSplit = new SplitText(".conversations_header h2", { type: "chars" });

const iconsWrapper = document.querySelector(".icons");
const icons = iconsWrapper.innerHTML;
iconsWrapper.innerHTML += icons + icons + icons + icons;

const totalWidth = iconsWrapper.scrollWidth / 3;


// hero section
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".mobile_wrapper",
        start: "top top",
        end: "+=1000",
        scrub: 3,
        pin: true,

    }
});


tl.from(helloSplit.chars, {
    y: 60, opacity: 0, duration: 0.5, stagger: 0.08
})
    .from(welcomeSplit.lines, {
        y: 40, opacity: 0, duration: 0.7, stagger: 0.3
    }, "+=0.3")
tl.fromTo(".slide1",
    { x: "50%" },
    { x: "-50%", duration: 1.5, ease: "power2.out" }
)
    .from(".slide2", { x: "-150%", duration: 1 }, "+=0.5")
    .from(".slide3", { y: "100%", duration: 1, opacity:0 }, "+=0.5")
    .to(".ai_brain .mobile_animation", {
        scale: 0.7,
        xPercent: () => window.innerWidth < 992 ? 0 : -70, 
        duration: 1,
    }, "+=0.5")

    .to(".ai_brain .line_shape", {
        opacity: 0,
        duration: 1
    }, "<")

    .set(".ai_brain .mobile_animation", { overflow: "visible", delay: 1 })
tl.fromTo(".slide1",
    { x: "-45%" },
    { x: "-100%", duration: 1.5, ease: "power2.out", opacity: 0.6, scale: 0.85 }, "+=0.5")
    .to(".slide2", { xPercent: 10, duration: 1, ease: "none", opacity: 0.6, scale: 0.85 }, "<")


    .fromTo(".drown_info",
        { left: "0vw", opacity: 0 },
        { left: "45vw", opacity: 1, duration: 1.2, scale: 1.4 },
        "<"
    )


// Conversation 
let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#conversations",
        start: "top 60%",
        end: "top 0%",
        scrub: 4
    }
});

tl1.fromTo(convSplit.chars,
    { opacity: 0.3 },
    {
        opacity: 1,
        duration: 1,
        stagger: 0.3,
    }, "+=0.1"
)


tl1.from(".communication_card", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    delay: 2,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
        trigger: "#conversations",
        start: "top 20%",
        end: "top -20%",
        scrub: 2,
    }
});


// Social media text
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#social",
        start: "top 50%",
        end: "top 10%",
        scrub: 2,
    }
});

tl2.from("#social h2", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
})

tl2.from("#social p", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
}, "+=0.2");




// Counter up
gsap.utils.toArray(".counter").forEach(counter => {
    gsap.fromTo(counter,
        { innerText: 0 },
        {
            innerText: +counter.dataset.target,
            duration: 2,
            ease: "power1.out",
            snap: { innerText: 1 },
            scrollTrigger: { trigger: counter, start: "top 80%" }
        }
    );
});




// Social media slider
gsap.to(iconsWrapper, {
    x: -totalWidth,
    duration: 15,
    ease: "none",
    repeat: -1
});



// Universal
let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#universal",
        start: "top 70%",
        end: "top 10%",
        scrub: 3,
    }
});

tl3.from(".universal_header h2", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
})
tl3.from(".universal_header p", {
    y: 40,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
}, "-=0.4")
tl3.from("#universal img", {
    y: 50,
    opacity: 0,
    duration: 1.4,
    ease: "power3.out"
}, "-=0.2");



// Join waitlist

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#waitlist",
        start: "top 40%",
        end: "top 0%",
        scrub: 4
    }
});

tl4.from("#waitlist h2", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
})
tl4.from("#waitlist p", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.5,
    ease: "power3.out"
}, "+=0.1");
tl4.from("#waitlist .primary_btn", {
    y: 35,
    opacity: 0,
    duration: 0.5,
}, "<")

tl4.from("#waitlist .waitlist_mob", {
    xPercent: 30,
    opacity: 0,
    duration: 2.5,
    ease: "power3.out"
}, "<")
tl4.from("#waitlist .waitlist_img1", {
    xPercent: 30,
    opacity: 0,
    duration: 2.5,
    ease: "power3.out"
}, "<")





// smooth animaton
ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.3,
    effects: true
});



// testimonial slider 
$(document).ready(function () {
    $('.testimonial_slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slideToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

