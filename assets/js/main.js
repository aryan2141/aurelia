
$('#nav_toggler').click(function () {
    $(this).toggleClass("open");
    $("#navbar").slideToggle(300);
});



gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
    duration: 2,
    smoothWheel: true,
    smoothTouch: false
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);


const header = document.querySelector(".header");
const sections = gsap.utils.toArray("[data-header]");

let currentSection = null;

function updateHeader() {
    const headerBottom = header.getBoundingClientRect().bottom;
    let newSection = null;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= headerBottom && rect.bottom > headerBottom) {
            newSection = section;
        }
    });

    if (!newSection || newSection === currentSection) return;

    currentSection = newSection;

    header.classList.remove("header-light", "header-dark");
    header.classList.add(`header-${newSection.dataset.header}`);
}

ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: updateHeader
});

updateHeader();


var swiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    slidesPerView: 1.2,
    speed: 1000,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },
    pagination: {
        el: ".testimonial-swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 25,
        },

        992: {
            slidesPerView: 2.5,
            spaceBetween: 30,
        },

        1200: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },

        1400: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
    }
});


var swiper = new Swiper(".gallery-swiper", {
    spaceBetween: 24,
    loop: true,
    slidesPerView: 1.5,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },
    speed: 5000,
    breakpoints: {
        576: {
            slidesPerView: 1.8,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 25,
        },

        992: {
            slidesPerView: 2.5,
            spaceBetween: 30,
        },

        1200: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },

        1400: {
            slidesPerView: 5,
            spaceBetween: 30,
        }
    }
});

var swiper = new Swiper(".category-swiper", {
    spaceBetween: 16,
    loop: true,
    slidesPerView: 1.5,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },
    speed: 4000,
    breakpoints: {
        576: {
            slidesPerView: 1.8,
            spaceBetween: 16,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },

        992: {
            slidesPerView: 2.5,
            spaceBetween: 24,
        },

        1200: {
            slidesPerView: 3.5,
            spaceBetween: 24,
        },

        1400: {
            slidesPerView: 4,
            spaceBetween: 24,
        }
    }
});


gsap.registerPlugin(SplitType);

const split = new SplitType('.about-txt', {
    types: 'lines, words, chars',
});

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        start: 'top 50%',
        end: 'end 0%',
        // pin: true,
        scrub: 0.1,
        // markers: true,
    }
});

tl2.to(split.chars, {
    opacity: '1',
    stagger: 1,
});



gsap.to(".hero-thumb", {
    x: 10,
    y: 8,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});
